import { Booking } from "../booking/Booking";
export class Passenger {
    firstName:string;
    lastName:string;
    booking:Booking[]=[];
    constructor(firsName:string,lastName:string) {
        this.firstName = firsName;
        this.lastName = lastName;
    }
    setBooking(booking:Booking){
        this.booking.push(booking)
    }
    // 
//     getReturnTicket(){
//         let count = 0;
//         for(let returnT of this.booking){
//             if(returnT.returnTicket == true){
//                 count+=1
//             }
//         }
//         return count
// }

    isEqual(other:Passenger){
        return this.firstName === other.firstName && this.lastName === other.lastName;
    }

}
