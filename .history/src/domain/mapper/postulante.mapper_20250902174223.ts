import { Postulante } from '../entity/postulante.entity';

export class PostulanteMapper {
  static toDto(entity: Postulante) {
    return {
      id: entity.id,
      nombre: entity.nombre,
      apPaterno: entity.apPaterno,
      apMaterno: entity.apMaterno,
      edad: entity.edad,
      direccion: entity.direccion,
      email: entity.email,
      curriculum: entity.curriculum,
      imagen: entity.imagen,
      fecha: entity.fecha,
    };
  }
}
