import { Entity, Column, ManyToOne, OneToOne, PrimaryColumn, OneToMany, ManyToMany, JoinColumn, JoinTable} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Order } from "./Order";
import { Pizza } from "./Pizza";
import { Topping } from "./Topping";

@Entity({name: 'pizza_orders'})
export class PizzaOrder extends BaseEntity
{
    @OneToOne(type => Order, order => order.id)
    @JoinColumn()
    order: Order;

    @OneToOne(type => Pizza, pizza => pizza.id, {eager:true})
    @JoinColumn()
    pizza: Pizza;

    @ManyToMany(type => Topping, topping => topping.id, {eager: true})
    @JoinTable({name: "pizza_orders_toppings"})
    toppings: Topping[];
}