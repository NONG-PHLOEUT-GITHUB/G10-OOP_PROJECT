import { Booking } from "../booking/Booking";

export class Passenger {
    firsName:string;
    lastName:string;
    booking:Booking[]=[];
    constructor(firsName:string,lastName:string) {
        this.firsName = firsName;
        this.lastName = lastName;
    }

}