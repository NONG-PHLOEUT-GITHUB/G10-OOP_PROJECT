import { Flight } from "./airport/flight/Flight";
import { Gate } from "./airport/gate/Gate";
import { Airoplan } from "./airport/aroplane/Airoplan";
import { Airline } from "./airport/airline/Airline";
import { Employee } from "./airport/employee/Employee";

export class Airport {
    private name:string;
    private address:string;
    public employees:Employee[]=[];
    public gates:Gate[]=[];
    public airoplans:Airoplan[]=[];
    public flights:Flight[]=[];
    public airlines:Airline[]=[]; // one airport have many airlines
    constructor(name:string,address:string) {
        this.name = name;
        this.address = address;
    }



    addEmployee(employee:Employee){
        this.employees.push(employee);
    }
    addGate(gate:Gate){
        this.gates.push(gate);
    }
    addAiroplan(airoplan:Airoplan){
        this.airoplans.push(airoplan);
    }
    addFlights(flight:Flight){
        this.flights.push(flight);
    }

    addAirline(airline:Airline){
        this.airlines.push(airline);
    }

    // getTrip(){
        
    // }
}

