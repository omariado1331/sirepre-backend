import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/domain/entity/usuario.entity';
import { UsuarioMapper } from 'src/domain/mapper/usuario.mapper';
import { CreateUsuarioDto } from 'src/presentation/dto/create-usuario.dot';
import { Repository } from 'typeorm';
import { hashPassword } from 'src/utils/hash.util';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private userRepository: Repository<Usuario>
    ) {}

    async create(dto: CreateUsuarioDto) {
        const existing = await this.userRepository.findOne({where: { username: dto.username }});
        if (existing) {
            throw new Error('Username already exists');
        }

        const user = this.userRepository.create({
            ...dto,
            password: await hashPassword(dto.password),
        });

        const saved = await this.userRepository.save(user);
        return UsuarioMapper.toDto(saved);
    }

    async findAll() {
        const usuarios = await this.userRepository.find();
        return usuarios.map(UsuarioMapper.toDto);
    }

    async findById(id: number) {
        const usuario = await this.userRepository.findOne({ where: { id } });
        if (!usuario) throw new Error('User not found');
        return UsuarioMapper.toDto(usuario); 
    }

    async findByUsername(username: string) {
        const usuario = await this.userRepository.findOne({ where: { username } });
        if (!usuario) throw new Error('User not found');
        return UsuarioMapper.toDto(usuario);
    }

}
