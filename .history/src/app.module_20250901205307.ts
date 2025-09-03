import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './data/usuarios/usuarios.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './security/auth/auth.module';

@Module({
  imports: [
    // Configuración del módulo de entorno
    ConfigModule.forRoot({
      isGlobal: true, // Hace que las variables de entorno estén disponibles en toda la aplicación
    }),
    // Configuración de TypeORM para PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuariosModule,
    AuthModule,
  ],
})
export class AppModule {}
