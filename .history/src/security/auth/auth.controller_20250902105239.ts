import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

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
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Body('rol') rol: string,
  ) {
    return this.authService.register(username, password, rol);
  }
}
