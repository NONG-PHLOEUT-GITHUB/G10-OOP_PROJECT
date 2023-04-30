import { Passenger } from "../../passenger/Passenger";
import { DateTime } from "../flight/DateTime";
import { Flight } from "../flight/Flight";
import { Employee } from "./Employee";
export class Pilot  extends Employee{
    flights:Flight[]=[];
    pilot: boolean;
    constructor(firstName: string, lastName: string,salary: number){
        super(firstName, lastName,salary);
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
    isEqual(other:Pilot): boolean {
        return other.firstName === this.getFirstName() && other.lastName === this.getLastName() && other.salary === this.getSalary();
    }

    
    addFlight(flight:Flight){
        this.flights.push(flight);
    }

}