import { Booking } from "../booking/Booking";
import { Beg } from "./Beg";
export class Passenger {
    firstName:string;
    lastName:string;
    booking:Booking[]=[];
    begs:Beg[]=[];
    constructor(firsName:string,lastName:string) {
        this.firstName = firsName;
        this.lastName = lastName;
    }
    addBooking(booking:Booking){
        this.booking.push(booking)
    }

    isEqual(other:Passenger){
        return this.firstName === other.firstName && this.lastName === other.lastName;
    }

    addBeg(beg:Beg){
        this.begs.push(beg);
    }

}
