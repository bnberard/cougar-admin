import { Entity, Column, ManyToOne, OneToOne, JoinColumn, ManyToMany, JoinTable} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Store } from "./Store";
import { Customer } from "./Customer";
import { CustomerAddresses } from "./CustomerAddress";
import { OrderType } from "./OrderType";
import { OrderPaymentType } from "./OrderPaymentType";
import { Note } from "./Note";

@Entity({name: 'orders'})
export class Order extends BaseEntity
{
    @ManyToOne(type => Store, store => store.orders)
    store: Store;

    @OneToOne(type => Customer, cust => cust.id, {eager: true})
    @JoinColumn()
    customer: Customer;

    @OneToOne(type => OrderType, type => type.type_id)
    @JoinColumn()
    order_type: OrderType;

    @OneToOne(type => OrderPaymentType, type => type.id)
    @JoinColumn()
    payment_type: OrderPaymentType;

    @OneToOne(type => CustomerAddresses, add => add.id)
    @JoinColumn()
    delivery_address: CustomerAddresses

    @Column({type: 'varchar', length: 1000, nullable:false})
    special_instructions: string;
}