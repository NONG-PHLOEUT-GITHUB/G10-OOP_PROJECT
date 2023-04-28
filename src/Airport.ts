import { Flight } from "./airport/flight/Flight";
import { Gate } from "./airport/gate/Gate";
import { Airoplan } from "./airport/aroplane/Airoplan";
import { Airline } from "./airport/airline/Airline";
import { Employee } from "./airport/employee/Employee";
import { DateTime } from "./airport/flight/DateTime";
import { Pilot } from "./airport/employee/Pilot";

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
    getFlight(){
       return "Airport have " + this.flights.length + " flight";
    }
    getAiroplanes(){
        return "Airline have " + this.airoplans.length + " plane";
    }
    // get all salary employees
    // get all flight by pilot and date

    getFlights (pilot: Pilot, date: DateTime): Flight[] {

        let result: Flight[] = [];
        this.flights.forEach(flight => {
           if(flight.airoplan.pilot.isEqual(pilot) && flight.dateTime.isEqual(date)) {
                result = this.flights;
                console.log(flight.airoplan.pilot.firstName);
           }  
                 
        });
       return result;
    }

    /// get gate for waiting flight by flight number

    getGate (flightNumber: number,date:DateTime): string {
        let gateWaiting = "";
        this.gates.forEach(gate=>{
            gate.flights.forEach(flight=>{
                if(flight.flightNumber == flightNumber && flight.dateTime.isEqual(date)){
                     gateWaiting = gate.gateID;
                }
            })
        })
        return "You are waiting in gate number " + gateWaiting;

    }

    getMeals (flightNumber: number,date:DateTime): number {
        let countMeals:number = 0;
            this.flights.forEach(flight=>{
                if(flight.flightNumber == flightNumber && flight.dateTime.isEqual(date)){
                    flight.airoplan.passengers.forEach(passenger=>{
                        console.log(passenger.booking);
                        
                    })    
                }
            })
        return countMeals;
    }

    //  salary pay to employee
    findSalary():number{
        let total:number=0;
        for(let salary of this.employees){
            total += salary.getSalary()
        };
        return total;
    }
}

