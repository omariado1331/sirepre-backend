import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreatePostulanteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  apPaterno: string;

  @IsNotEmpty()
  @IsString()
  apMaterno: string;

  @IsNotEmpty()
  @IsString()
  @Min(18)
  @Max(65)
  edad: number;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  curriculum: string;

  @IsNotEmpty()
  @IsString()
  imagen: string;
}
