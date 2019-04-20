import {UpdateDateColumn, PrimaryGeneratedColumn, CreateDateColumn} from "typeorm";

export abstract class BaseEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type: "timestamp", name: "created_date"})
    createdDate: string;

   @UpdateDateColumn({type: "timestamp", name: "modified_date"})
    modifiedDate: string;
}