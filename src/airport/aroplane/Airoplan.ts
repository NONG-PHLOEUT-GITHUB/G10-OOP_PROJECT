
import { Flight_attendant } from "../employee/Flight_attendant";
import { Pilot } from "../employee/Pilot";
import { Passenger } from "../../passenger/Passenger";
import { Flight } from "../flight/Flight";
import { Layout } from "./Layout";
import { Seat } from "./Seat";
export class Airoplan {
    registrationNumber: string;
    layouts: Layout[]=[];
    flights:Flight[]=[];
    passengers:Passenger[]=[];
    pilot:Pilot;
    flightAttendant:Flight_attendant[]=[];
    constructor(registration: string,pilot:Pilot){
        this.registrationNumber = registration;
        this.pilot = pilot;
    }

    addPassenger(passenger: Passenger){
        this.passengers.push(passenger);
    }

    findFreeSeat(seat: Layout): Seat|undefined {
        let result = undefined;
        this.layouts.forEach(layout =>  {
            let allSeat = layout.getAllSeat();
        });
        return result;
    }

    
    
}