import { Entity, Column, ManyToOne, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Order } from "./Order";
import { Address } from "./Address";

@Entity({name: 'stores'})
export class Store extends BaseEntity
{
    @Column({type: 'varchar', length: 30, nullable:false})
    store_name: string;

    @OneToOne(type => Address, address => address.id)
    @JoinColumn()
    address: Address;

    @OneToMany(type => Order, order => order.store)
    orders: Order[];
}