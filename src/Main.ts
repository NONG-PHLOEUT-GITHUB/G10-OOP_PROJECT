import { Airport } from "./Airport";
import { Booking } from "./booking/Booking";
import { Flight } from "./airport/flight/Flight";
import { Gate } from "./airport/gate/Gate";
import { Airoplan } from "./airport/aroplane/Airoplan";
import { Seat } from "./airport/aroplane/Seat";
import { Employee } from "./airport/employee/Employee";
import { Passenger } from "./passenger/Passenger";
import { Pilot } from "./airport/employee/Pilot";
import {Airline} from "./airport/airline/Airline"

// Q1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)
let airport = new Airport("Siem Reap National Airport","Siem Reap");


let gate = new Gate("A 10");
let pilot = new Pilot("ll","dd",2000);
let airoplan = new Airoplan("OA-LWP",pilot);
let flight = new Flight(12,"Siem Reap","Bangkok","1hour",airoplan);
let passenger = new Passenger("ll","dd");
airoplan.addPassenger(passenger);
gate.setFlight(flight);

airport.addGate(gate);
// airport.addAiroplan(airoplan);
airport.addFlights(flight);
let seat = new Seat(1);

let booking = new Booking(12,seat,true);
booking.setSeat(seat);
booking.addPassenger(passenger);


// console.log(flight.airoplan.passengers);
// console.log(airport);
// console.log(booking);


// As an airline manager, I want to know for a given flight, how many passengers have return tickets.

// let airline = new Airline("Spirit",);

