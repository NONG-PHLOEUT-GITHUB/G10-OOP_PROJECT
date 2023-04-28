import { Booking } from "../booking/Booking";
export class Passenger {
    firstName:string;
    lastName:string;
    booking:Booking[]=[];
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

}
