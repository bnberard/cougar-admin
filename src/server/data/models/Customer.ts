import { Entity, Column, ManyToMany, OneToMany, JoinTable, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Order } from "./Order";
import { Address } from "./Address";
import { CustomerAddresses } from "./CustomerAddress";
import { Note } from "./Note";

@Entity({name: 'customers'})
export class Customer extends BaseEntity
{
    @Column({type: 'varchar', length: 10, nullable:false})
    phone_num: string;

    @Column({type: 'varchar', length: 30, nullable:false})
    firstName: string;

    @Column({type: 'varchar', length: 30, nullable:false})
    lastName: string;
    
    @Column({type: 'varchar', length: 30, nullable:true})
    email: string;

    @OneToMany(type => CustomerAddresses, add => add.id)
    addresses: Address[];

    @OneToMany(type => Order, order => order.id)
    orders: Order[];

    @ManyToMany(type => Note, note => note.id, {eager: true})
    @JoinTable({name: "cutsomer_notes"})
    notes: Note[];
}