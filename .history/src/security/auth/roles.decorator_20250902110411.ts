import { SetMetadata } from '@nestjs/common';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: string[]) => SetMetadata(ROLES_KEY, roles);
// This decorator can be used to specify roles required for accessing certain routes or controllers.
// Example usage:
// @Roles('admin', 'user')
// @Get('some-protected-route')
