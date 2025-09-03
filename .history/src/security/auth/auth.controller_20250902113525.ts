import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RolesGuard } from './roles.guard';
import { Roles } from './roles.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  // Endpoint for user login
  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
  ) {
    return this.authService.login(username, password);
  }

  // Endpoint for user registration
  @Post('register')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin') // Protect this route with JWT authentication
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('rol') rol: string,
  ) {
    return this.authService.register(username, password, rol);
  }
}
