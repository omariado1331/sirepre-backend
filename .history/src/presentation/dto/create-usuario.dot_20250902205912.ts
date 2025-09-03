import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  rol: string;
}
