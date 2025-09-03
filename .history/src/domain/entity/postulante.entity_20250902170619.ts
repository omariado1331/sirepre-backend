import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Postulante {
  //Define your entity properties here
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 100 })
  apPaterno: string;

  @Column({ type: 'varchar', length: 100 })
  apMaterno: string;

  @Column({ type: 'int' })
  edad: number;

  @Column({ type: 'varchar', length: 255 })
  direccion: string;

  @Column({ type: 'varchar', length: 100 })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  curriculum: string;

  @Column({ type: 'varchar', length: 15 })
  imagen: string;

  @CreateDateColumn()
  fecha: Date;
}
