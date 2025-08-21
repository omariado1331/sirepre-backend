import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/domain/entity/usuario.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        // Inject any required services here, e.g., UserService for user management
        @InjectRepository(Usuario)
        private userRepository: Repository<Usuario>,
        private jwtService: JwtService
    ) {}


    async ValidateUseer(username: string, password: string): Promise<Usuario> {
        const user = await this.userRepository.findOne( {where: {username}} );
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        return user;
    }

    async login(username: string, password: string) {
        const user = await this.ValidateUseer(username, password);

        const payload = { username: user.username, sub: user.id };
        const token = this.jwtService.signAsync(payload);

        await this.userRepository.save(user);

        return {
            access_token: await token, // Return the JWT token
            user: {
                id: user.id,
                username: user.username,
                rol: user.rol, // Assuming 'rol' is a property of Usuario
            }
        }
    }

}
