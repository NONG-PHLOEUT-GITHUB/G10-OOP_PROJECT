import { Booking } from "../../booking/Booking";
 export class Airline{
    companyName: string;
    booking:Booking;
    constructor(companyName: string, booking:Booking){
        this.companyName = companyName;
        this.booking = booking
    }
}