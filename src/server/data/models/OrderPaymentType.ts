import { Entity, Column, ManyToOne, ManyToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { OrderEvents } from "./OrderEvents";

@Entity({name: 'order_payment_types'})
export class OrderPaymentType
{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({type: 'varchar', length: 5, nullable:true})
    payment_cde: string;

    @Column({type: 'varchar', length: 10, nullable:true})
    payment_description: string;
}