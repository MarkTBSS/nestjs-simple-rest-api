import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity() 
export class Blackpink { 
    @PrimaryGeneratedColumn()
    id: number

    @Column() 
    name: string

    @Column() 
    salary: number
}