import { Flight } from "../flight/Flight";

export class Gate {
    private gateID:string;
    flight:Flight;
    constructor(gateID:string) {
        this.gateID = gateID;
    }
    setFlight(flight:Flight){
        this.flight = flight;
    }
}

