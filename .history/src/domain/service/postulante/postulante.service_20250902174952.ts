import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Postulante } from 'src/domain/entity/postulante.entity';
import { CreatePostulanteDto } from 'src/presentation/dto/create-postulante.dto';
import { UpdatePostulanteDto } from 'src/presentation/dto/update-postulante.dto';
import { Repository } from 'typeorm';

@Injectable()
export class PostulanteService {
  constructor(
    @InjectRepository(Postulante)
    private readonly postulanteRepository: Repository<Postulante>,
  ) {}

  async create(dto: CreatePostulanteDto): Promise<Postulante> {
    const postulante = this.postulanteRepository.create(dto);
    return this.postulanteRepository.save(postulante);
  }

  async findAll(): Promise<Postulante[]> {
    return this.postulanteRepository.find();
  }

  async findOne(id: number): Promise<Postulante> {
    const postulante = await this.postulanteRepository.findOneBy({ id });
    if (!postulante) {
      throw new Error('Postulante not found');
    }
    return postulante;
  }

  async remove(id: number): Promise<void> {
    const postulante = await this.postulanteRepository.findOneBy({ id });
    if (!postulante) {
      throw new Error('Postulante not found');
    }
    await this.postulanteRepository.remove(postulante);
  }

  async update(id: number, dto: UpdatePostulanteDto): Promise<Postulante> {
    const postulante = await this.findOne(id);
    Object.assign(postulante, dto);
    return this.postulanteRepository.save(postulante);
  }
}
