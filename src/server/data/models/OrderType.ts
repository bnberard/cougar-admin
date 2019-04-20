import { Entity, Column, ManyToOne, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { OrderEvents } from "./OrderEvents";

@Entity({name: 'order_types'})
export class OrderType
{
    @PrimaryGeneratedColumn()
    type_id: number;
    
    @Column({type: 'varchar', length: 5, nullable:true})
    type_cde: string;

    @Column({type: 'varchar', length: 10, nullable:true})
    type_desc: string;
}