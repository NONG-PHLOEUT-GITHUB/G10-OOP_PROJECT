import { Booking } from "../Booking/Booking";
export class Passenger {
    firsName:string;
    lastName:string;
    booking:Booking[]=[];
    constructor(firsName:string,lastName:string) {
        this.firsName = firsName;
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

}
