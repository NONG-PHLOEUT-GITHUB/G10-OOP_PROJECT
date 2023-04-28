import { Booking } from "../../booking/Booking";
import { Flight } from "../flight/Flight";
 export class Airline{
    companyName: string;
    flights:Flight[]=[];
    constructor(companyName: string){
        this.companyName = companyName;
    }
    addFlight(flight:Flight){
        this.flights.push(flight)
    }
    getReturnTicket(){
        let cout = 0;
        for(let flight of this.flights){
            if(flight.airoplan.passengers[0].booking[0].returnTicket == true){
                cout+=1
            }
        }
        return cout;
    }
}