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
import { DateTime } from "./airport/flight/DateTime";

// Q1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)
let airport = new Airport("Siem Reap National Airport","Siem Reap");

// create airline _________________________________________________
let cambodiaAngkorAir = new Airline("Cambodia Angkor Air");
let airAsia = new Airline("Air Asia");

airport.addAirline(cambodiaAngkorAir);
airport.addAirline(airAsia);

// create gate ____________________________________________________

let gateA10 = new Gate("A 10");
let gateA11 = new Gate("A 11");
let gateA12 = new Gate("A 12");
airport.addGate(gateA10);
airport.addGate(gateA11);
airport.addGate(gateA12);

// create employee__________________________________________________

let pilot = new Pilot("ll","dd",2000);

// create airoplane _________________________________________________
let airoplan = new Airoplan("OA-LWP",pilot);

// create flight ____________________________________________________

let flight = new Flight(12,"Siem Reap","Bangkok","1hour",airoplan);

// airport.addFlights()

let passenger = new Passenger("ll","dd");
airoplan.addPassenger(passenger);
gateA10.setFlight(flight);

// airport.addAiroplan(airoplan);
airport.addFlights(flight);
let seat = new Seat(1);

// let booking = new Booking(seat,true);
// booking.setSeat(seat);
// booking.addPassenger(passenger);


// console.log(flight.airoplan.passengers);
// console.log(airport);
// console.log(booking);
// console.log(flight.airoplan.passengers[0].booking);



// As an airline manager, I want to know for a given flight, how many passengers have return tickets.
let dateTime1 = new DateTime(12,4,2023,4)
let booking1= new Booking(dateTime1,seat,true)
let booking2= new Booking(dateTime1,seat,false)
let airline = new Airline("Spirit Company");
airline.addFlight(flight);

console.log(airline.flights[0].airoplan.passengers[0]);
