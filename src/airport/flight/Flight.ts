
import { Booking } from "../../booking/Booking";
import { Meal } from "../../booking/Meal";
import { Passenger } from "../../passenger/Passenger";
import { Airoplan } from "../aroplane/Airoplan";
import { Seat } from "../aroplane/Seat";
import { DateTime } from "./DateTime";
export class Flight {
    public flightNumber: number;
    private departureAirport: string;
    private arrivalAirport: string;
    private duration: string;
    airoplan:Airoplan;
    bookings:Booking[]=[];
    dateTime:DateTime;

    constructor(flightNumber: number, departureAirport: string, arrivalAirport: string,duration: string,airoplan:Airoplan) {
        this.flightNumber = flightNumber;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.duration = duration;
        this.airoplan = airoplan;
    }

    setDateTime(dateTime: DateTime){
        this.dateTime = dateTime;
    }

    bookingFlight(flight:Flight,passenger:Passenger,dateTime:DateTime,seat:Seat,returnTicket:boolean,meal:Meal) : boolean{
        let bookingTicket = new Booking(flight,dateTime,seat,returnTicket,passenger,meal);
        this.bookings.push(bookingTicket);
        return true;
    }

    // getMeals (flightNumber: number,date:DateTime): number {
    //     let countMeals:number = 0;
    //         this.flights.forEach(element=>{
    //             if(flight.flightNumber == flightNumber && flight.dateTime.isEqual(date)){
    //                 flight.airoplan.passengers.forEach(passenger=>{
    //                     console.log(passenger.booking);
                        
    //                 })    
    //             }
    //         })
    //     return countMeals;
    // }


}