
// import { Booking } from "../../booking/Booking";
// import { Passenger } from "../../passenger/Passenger";
// import { Seat } from "../aroplane/Seat";
// import { DateTime } from "./DateTime";
// import { Flight } from "./Flight";

// export class Trip {
//     departurTrip:string;
//     arrivalTrip:string;
//     passenger:Passenger[]=[];
//     flights:Flight[]=[];
//     DateTime:DateTime;
//     bookings:Booking[]=[];
//     constructor(departurTrip:string,arrivalTrip:string) {
//         this.departurTrip = departurTrip;
//         this.arrivalTrip = arrivalTrip;
//     }

//     bookingTrip(flight:Flight,passenger:Passenger,dateTime:DateTime,seat:Seat,returnTicket:boolean) : boolean{
//         let bookingTicket = new Booking(flight,dateTime,seat,returnTicket,passenger);
//         this.bookings.push(bookingTicket);
//         return true;
//     }
// }