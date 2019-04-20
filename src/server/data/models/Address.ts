import { Entity, Column, ManyToMany, OneToMany, JoinTable, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({name: 'addresses'})
export class Address
{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'varchar', length: 50, nullable:false})
    address_street: string;

    @Column({type: 'varchar', length: 30, nullable:false})
    address_city: string;

    @Column({type: 'varchar', length: 2, nullable:false})
    address_state: string;

    @Column({type: 'varchar', length: 10, nullable:false})
    address_zip: string;
}