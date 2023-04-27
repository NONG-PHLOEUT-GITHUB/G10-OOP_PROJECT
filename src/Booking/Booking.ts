import { Seat } from "../flight/airoplan/Seat";
import { Passenger } from "../human/passenger/Passenger";

export class Booking {
    passengers:Passenger[]=[];
    seat: Seat;
    constructor() {
        
    }

    
    addPassenger(passenger:Passenger){
        this.passengers.push(passenger);
    }
    setSeat(seat:Seat) {
        this.seat = seat;
    }
}