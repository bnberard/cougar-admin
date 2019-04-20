import { Entity, Column, ManyToOne, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { OrderEvents } from "./OrderEvents";

@Entity({name: 'order_event_types'})
export class OrderEventType
{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'varchar', length: 5, nullable:true})
    event_cde: string;

    @Column({type: 'varchar', length: 10, nullable:true})
    event_desc: string;
}