import { Seat } from "../airport/aroplane/Seat";
import { DateTime } from "../airport/flight/DateTime";
import { Flight } from "../airport/flight/Flight";
import { Passenger } from "../passenger/Passenger";

export class Booking {
    passengers:Passenger;
    seat: Seat;
    dateTime:DateTime;
    flights:Flight;
    returnTicket:boolean;

    constructor(dateTime:DateTime,seat:Seat, returnTicket: boolean) {
        this.dateTime = dateTime;
        this.seat = seat;
        this.returnTicket = returnTicket;
    }

}
