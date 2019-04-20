import { Entity, Column, ManyToMany, OneToMany, JoinTable } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({name: 'employees'})
export class Employee extends BaseEntity
{
    @Column({type: 'varchar', length: 30, nullable:false})
    firstName: string;

    @Column({type: 'varchar', length: 30, nullable:false})
    lastName: string;

    @Column({type: 'varchar', length: 10, nullable:false})
    phone_number: string;
}