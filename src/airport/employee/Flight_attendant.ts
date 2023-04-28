import { Employee } from "./Employee";
export class Flight_attendant extends Employee{
  
    constructor(firstName: string, lastName: string,salary: number){
        super(firstName, lastName,salary)
    }  
    getFirstName(): string {
        return this.firstName;
    }
    getLastName(): string {
        return this.lastName;
    }
    getSalary(): number {
       return this.salary;
    }
}