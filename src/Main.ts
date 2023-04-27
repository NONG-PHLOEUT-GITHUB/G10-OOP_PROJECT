import { Airport } from "./Airport";
import { Booking } from "./booking/Booking";
import { Flight } from "./airport/flight/Flight";
import { Gate } from "./airport/gate/Gate";
import { Airoplan } from "./airport/aroplane/Airoplan";
import { Seat } from "./airport/aroplane/Seat";
import { Employee } from "./airport/employee/Employee";
import { Pilot } from "./airport/employee/Pilot";
import { Passenger } from "./passenger/Passenger";

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

// let booking = new Booking();
// booking.setSeat(seat);
// booking.addPassenger(passenger);


// console.log(flight.airoplan.passengers);




console.log(airport);
// console.log(booking);

