
import { Booking } from "../../booking/Booking";
import { Meal } from "../../booking/Meal";
import { Passenger } from "../../passenger/Passenger";
import { Airline } from "../airline/Airline";
import { Airoplan } from "../aroplane/Airoplan";
import { Pilot } from "../employee/Pilot";
import { DateTime } from "./DateTime";
export class Flight {
    public flightNumber: string;
    private departureAirport: string;
    private arrivalAirport: string;
    private duration: string;
    airoplanes:Airoplan;
    bookings:Booking[]=[];
    dateTime:DateTime;
    meals?:Meal[]=[];
    pilots:Pilot[]=[];
    // passengers:Passenger[]=[];
    constructor(flightNumber: string, departureAirport: string, arrivalAirport: string,duration: string,) {
        this.flightNumber = flightNumber;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.duration = duration;
    }


    setDateTime(dateTime: DateTime){
        this.dateTime = dateTime;
    }

    addPilot(pilot:Pilot){
        this.pilots.push(pilot);
    }
    setAroplane(airplane:Airoplan){
        this.airoplanes = airplane;
    }
    
    addBooking(booking:Booking){
        this.bookings.push();
    }

}