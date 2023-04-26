import { Booking } from "../Booking/Booking";

export class Flight {
    private flightNumber: number;
    private departureAirport: string;
    private arrivalAirport: string;
    private duration: number;
    booking:Booking[]=[];
    constructor(flightNumber: number, departureAirport: string, arrivalAirport: string,duration: number) {
        this.flightNumber = flightNumber;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.duration = duration;
    }
}