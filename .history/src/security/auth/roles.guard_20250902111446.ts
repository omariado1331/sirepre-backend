import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!requiredRoles) {
      return true; // If no roles are required, allow access
    }

    const request = context
      .switchToHttp()
      .getRequest<{ user?: { rol: string } }>();
    const user = request.user;

    if (!user) {
      throw new Error('User not authenticated');
    }

    if (!requiredRoles.includes(user.rol)) {
      throw new Error('User does not have the required role');
    }

    return true; // User has one of the required roles
  }
}
