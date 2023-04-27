import { Employee } from "../Employee";
export class Pilot  extends Employee{
    constructor(firstName: string, lastName: string,salary: number){
        super(firstName, lastName,salary);
    }
}