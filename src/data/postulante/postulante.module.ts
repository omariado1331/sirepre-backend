import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postulante } from 'src/domain/entity/postulante.entity';
import { PostulanteService } from 'src/domain/service/postulante/postulante.service';
import { PostulanteController } from 'src/presentation/controller/postulante/postulante.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Postulante])],
  providers: [PostulanteService],
  controllers: [PostulanteController],
  exports: [PostulanteService],
})
export class PostulanteModule {}
