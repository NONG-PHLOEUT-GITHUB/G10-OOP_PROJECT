import { Airport } from "./Airport";
import { Booking } from "./booking/Booking";
import { Flight } from "./flight/Flight";
import { Gate } from "./flight/Gate";
import { Airoplan } from "./flight/airoplan/Airoplan";
import { Seat } from "./flight/airoplan/Seat";
import { Employee } from "./human/employee/Employee";
import { Pilot } from "./human/employee/staff/Pilot";
import { Passenger } from "./human/passenger/Passenger";

let airport = new Airport("Siem Reap National Airport","Siem Reap");

let employee = new Employee("ll","dd",8000);
let gate = new Gate("A 10");
let pilot = new Pilot("ll","dd",2000);
let airoplan = new Airoplan("OA-LWP",pilot);
let flight = new Flight(12,"Siem Reap","Bangkok","1hour",airoplan);
let passenger = new Passenger("ll","dd");
airoplan.addPassenger(passenger);
gate.setFlight(flight);

airport.addEmployee(employee);
airport.addGate(gate);
// airport.addAiroplan(airoplan);
airport.addFlights(flight);
let seat = new Seat(1);

let booking = new Booking();
booking.setSeat(seat);
booking.addPassenger(passenger);
flight.addBooking(booking);

// console.log(flight.airoplan.passengers);




console.log(airport);
// console.log(booking);

