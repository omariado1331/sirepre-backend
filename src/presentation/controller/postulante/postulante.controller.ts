import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Put,
  ParseIntPipe,
  Param,
} from '@nestjs/common';
import { PostulanteMapper } from 'src/domain/mapper/postulante.mapper';
import { PostulanteService } from 'src/domain/service/postulante/postulante.service';
import { CreatePostulanteDto } from 'src/presentation/dto/create-postulante.dto';
import { UpdatePostulanteDto } from 'src/presentation/dto/update-postulante.dto';

@Controller('postulante')
export class PostulanteController {
  constructor(private readonly postulanteService: PostulanteService) {}

  @Post()
  async create(@Body() dto: CreatePostulanteDto) {
    const postulante = await this.postulanteService.create(dto);
    return PostulanteMapper.toDto(postulante);
  }

  @Get()
  async findAll() {
    const postulantes = await this.postulanteService.findAll();
    return postulantes.map((p) => PostulanteMapper.toDto(p));
  }

  @Get(':id')
  async findOne(@Body('id', ParseIntPipe) id: number) {
    const postulante = await this.postulanteService.findOne(id);
    return PostulanteMapper.toDto(postulante);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePostulanteDto,
  ) {
    const postulante = await this.postulanteService.update(id, dto);
    return PostulanteMapper.toDto(postulante);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.postulanteService.remove(id);
    return { message: 'Postulante deleted successfully' };
  }
}
