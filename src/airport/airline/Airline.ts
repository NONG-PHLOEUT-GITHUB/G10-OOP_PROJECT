import { Booking } from "../../booking/Booking";
import { Meal } from "../../booking/Meal";
import { Passenger } from "../../passenger/Passenger";
import { Seat } from "../aroplane/Seat";
import { DateTime } from "../flight/DateTime";
import { Flight } from "../flight/Flight";
 export class Airline{
    companyName: string;
    flights:Flight[]=[];
    bookings:Booking[]=[];

    constructor(companyName: string){
        this.companyName = companyName;
    }

    addFlight(flight:Flight){
        this.flights.push(flight)
    }

    addBookings(booking:Booking){
        this.bookings.push(booking);
    }


    // return ticket --------------------------------
    getReturnTicket(flightNumber:string):Passenger[]{
        let count:Passenger[] = [];
        this.bookings.forEach(Allflights =>{
            if(Allflights.flights[0].flightNumber === flightNumber){
                if(Allflights.returnTicket === true){
                    count.push(Allflights.passengers);
                }
            }
        })
        return count;
    }

    getFlight(){
        return this.flights;
    }
}