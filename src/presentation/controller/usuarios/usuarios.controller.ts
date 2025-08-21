import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsuariosService } from 'src/domain/service/usuarios/usuarios.service';
import { CreateUsuarioDto } from 'src/presentation/dto/create-usuario.dot';
import { UsuarioDto } from 'src/presentation/dto/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
    constructor(private usuariosService: UsuariosService) {}

    @Post()
    async register(@Body() dto: CreateUsuarioDto): Promise<UsuarioDto> {
        return this.usuariosService.create(dto);
    } 

    @Get()
    async getAll(): Promise<UsuarioDto[]> {
        return this.usuariosService.findAll();
    }

    @Get(':id')
    async getById(@Body('id') id: number): Promise<UsuarioDto> {
        return this.usuariosService.findById(id);
    }

}
