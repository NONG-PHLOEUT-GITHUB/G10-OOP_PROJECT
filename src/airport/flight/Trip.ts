
import { DateTime } from "./DateTime";
import { Flight } from "./Flight";

export class Trip {
    departurTrip:string;
    arrivalTrip:string;
    flights:Flight[]=[];
    DateTime:DateTime;
    constructor(departurTrip:string,arrivalTrip:string) {
        this.departurTrip = departurTrip;
        this.arrivalTrip = arrivalTrip;
    }

}