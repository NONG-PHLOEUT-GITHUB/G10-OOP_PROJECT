import { Flight } from "../flight/Flight";

export class Gate {
    public gateID:string;
    flights:Flight[]=[];
    constructor(gateID:string) {
        this.gateID = gateID;
    }


    addFlight(flight:Flight){
        this.flights.push(flight);
    }
}

