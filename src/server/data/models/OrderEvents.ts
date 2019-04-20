import { Entity, Column, ManyToMany, OneToMany, JoinTable, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Order } from "./Order";
import { OrderEventType } from "./OrderEventType";
import { Employee } from "./Employee";

@Entity({name: 'order_events'})
export class OrderEvents extends BaseEntity
{
    @ManyToOne(type => Order, ord => ord.id)
    order: Order;

    @Column({type: 'timestamp', nullable: false})
    event_datetime: string;

    @OneToOne(type => OrderEventType, type => type.id)
    @JoinColumn()
    event_type: OrderEventType;

    @OneToOne(type => Employee, type => type.id)
    @JoinColumn()
    employee: Employee;
}