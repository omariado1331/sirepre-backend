import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/domain/entity/usuario.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]), // Importing the Usuario entity for TypeORM
    JwtModule.register({
      secret: 'your-secret-key', // Replace with your actual secret key
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
