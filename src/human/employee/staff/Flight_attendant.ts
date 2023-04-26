import { Employee } from "../Employee";
export class Flight_attendant extends Employee{
    constructor(firstName: string, lastName: string,salary: number){
        super(firstName, lastName,salary)
    }
}