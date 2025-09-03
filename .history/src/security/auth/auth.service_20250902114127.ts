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
    private readonly userRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  // User registration
  async register(
    username: string,
    password: string,
    rol: string,
  ): Promise<Usuario> {
    const existingUser = await this.userRepository.findOne({
      where: { username },
    });
    if (existingUser) {
      throw new Error('Username already exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = this.userRepository.create({
      username,
      password: hashedPassword,
      rol,
    });
    return this.userRepository.save(newUser);
  }

  // Validate user credentials
  async ValidateUseer(username: string, password: string): Promise<Usuario> {
    const user = await this.userRepository.findOne({ where: { username } });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      return user;
    } else {
      throw new UnauthorizedException('Invalid password');
    }
  }

  // User login
  async login(username: string, password: string) {
    const user = await this.ValidateUseer(username, password);

    const payload = { sub: user.id, username: user.username, rol: user.rol };
    const token = this.jwtService.signAsync(payload);

    return {
      access_token: await token, // Return the JWT token
      user: {
        id: user.id,
        username: user.username,
        rol: user.rol, // Assuming 'rol' is a property of Usuario
      },
    };
  }
}
