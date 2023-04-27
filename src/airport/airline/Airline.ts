import { Booking } from "../../booking/Booking";
import { Flight } from "../flight/Flight";
 export class Airline{
    companyName: string;
    flights:Flight[]=[];
    constructor(companyName: string){
        this.companyName = companyName;
    }
    addFlight(flight:Flight){
        this.flights.push(flight)
    }
}