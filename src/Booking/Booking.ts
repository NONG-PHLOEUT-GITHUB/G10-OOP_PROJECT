import { Seat } from "../airport/aroplane/Seat";
import { DateTime } from "../airport/flight/DateTime";
import { Flight } from "../airport/flight/Flight";
import { Passenger } from "../passenger/Passenger";

export class Booking {
    passengers:Passenger;
    seat: Seat;
    dateTime:DateTime;
    flights:Flight;
    returnTicket:boolean;

    constructor(flight:Flight,dateTime:DateTime,seat:Seat, returnTicket: boolean,passenger:Passenger) {
        this.flights = flight;
        this.dateTime = dateTime;
        this.seat = seat;
        this.returnTicket = returnTicket;
        this.passengers = passenger;
    }
    // find passenger have return ticket
    
    getSeat(){
        return this.seat;
    }

}
