import { Flight } from "./Flight";
export class Ariline{
    name: string;
    flight: Flight;
    constructor(name: string, flight: Flight){
        this.name = name;
        this.flight = flight;
    }
   
}