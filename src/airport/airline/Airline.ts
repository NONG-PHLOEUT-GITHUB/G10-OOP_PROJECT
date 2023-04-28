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
    
    // return ticket --------------------------------
    getReturnTicket(){
        let count = 0;
        for(let flight of this.flights){
            for(let airplan of flight.airoplan.passengers){
                for(let returnT of airplan.booking){
                    if(returnT.returnTicket == true){
                        count+=1
                    }
                }
            }
        return count;
            
        }
    }
}