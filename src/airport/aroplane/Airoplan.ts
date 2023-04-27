
import { Flight_attendant } from "../employee/staff/Flight_attendant";
import { Pilot } from "../employee/staff/Pilot";
import { Passenger } from "../../human/passenger/Passenger";
import { Flight } from "../flight/Flight";
import { Layout } from "./Layout";
export class Airoplan {
    registrationNumber: string;
    layout: Layout;
    flights:Flight[]=[];
    passengers:Passenger[]=[];
    pilot:Pilot;
    flightAttendant:Flight_attendant[]=[];
    date: string;
    constructor(registration: string,pilot:Pilot){
        this.registrationNumber = registration;
        this.pilot = pilot;
    }

    addPassenger(passenger: Passenger){
        this.passengers.push(passenger);
    }

    
    
}