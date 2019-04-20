import { Entity, Column, ManyToMany, OneToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Order } from "./Order";
import { Address } from "./Address";
import { Customer } from "./Customer";

@Entity({name: 'customer_addresses'})
export class CustomerAddresses extends BaseEntity
{
    @Column({type: 'varchar', length: 30, nullable:false})
    nickname: string;

    @Column({type: 'bool'})
    preferred: boolean;

    @OneToOne(type => Customer, cust => cust.id)
    @JoinColumn()
    customer: Customer;

    @OneToOne(type => Address, add => add.id)
    @JoinColumn()
    address: Address;

    @OneToMany(type => Order, order => order.id)
    orders: Order[];
}