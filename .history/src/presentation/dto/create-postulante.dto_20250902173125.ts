import { IsString, Max, Min } from 'class-validator';

export class CreatePostulanteDto {
  @IsString()
  nombre: string;

  @IsString()
  apPaterno: string;

  @IsString()
  apMaterno: string;

  @IsString()
  @Min(18)
  @Max(65)
  edad: number;

  @IsString()
  direccion: string;

  @IsString()
  email: string;

  @IsString()
  curriculum: string;

  @IsString()
  imagen: string;
}
