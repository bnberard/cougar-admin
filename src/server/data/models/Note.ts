import { Entity, Column, ManyToMany, OneToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({name: 'notes'})
export class Note extends BaseEntity
{    
    @Column({type: 'varchar', length: 255, nullable:false})
    note_text: string;
}