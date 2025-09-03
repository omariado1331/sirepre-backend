import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/domain/entity/usuario.entity';
import { UsuariosService } from 'src/domain/service/usuarios/usuarios.service';
import { UsuariosController } from 'src/presentation/controller/usuarios/usuarios.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Usuario])],
    controllers: [UsuariosController],
    providers: [UsuariosService],
    exports: [UsuariosService] // Exporting the service for use in other modules
})
export class UsuariosModule {}
