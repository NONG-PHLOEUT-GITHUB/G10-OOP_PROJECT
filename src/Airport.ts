import { Flight } from "./airport/flight/Flight";
import { Gate } from "./airport/gate/Gate";
import { Airoplan } from "./airport/aroplane/Airoplan";
import { Employee } from "./airport/employee/Employee";

export class Airport {
    name:string;
    address:string;
    employees:Employee[]=[];
    gates:Gate[]=[];
    airoplans:Airoplan[]=[];
    flights:Flight[]=[];
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

    getTrip(){
        
    }
}

