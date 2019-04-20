import { Entity, Column, ManyToOne, ManyToMany} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { PizzaOrder } from "./PizzaOrder";

@Entity({name: 'toppings'})
export class Topping extends BaseEntity
{
    @Column({type: 'varchar', length: 30, nullable:true})
    topping_name: string;

    @Column({type: 'int', nullable:false})
    price: number;
}