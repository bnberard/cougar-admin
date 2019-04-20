import { Entity, Column, ManyToOne} from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity({name: 'pizzas'})
export class Pizza extends BaseEntity
{
    @Column({type: 'varchar', length: 30, nullable:true})
    pizza_type: string;

    @Column({type: 'int', nullable:false})
    price: number;
}