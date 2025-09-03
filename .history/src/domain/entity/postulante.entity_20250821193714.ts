import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Postulante {
    //Define your entity properties here
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string;

    @Column({ type: 'varchar', length: 100 })
    apPaterno: string;

    @Column({ type: 'varchar', length: 100 })
    apMaterno: string;
    
}