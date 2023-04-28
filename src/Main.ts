import { Airport } from "./Airport";
import { Flight } from "./airport/flight/Flight";
import { Gate } from "./airport/gate/Gate";
import { Airoplan } from "./airport/aroplane/Airoplan";
import { Seat } from "./airport/aroplane/Seat";
import { Employee } from "./airport/employee/Employee";
import { Passenger } from "./passenger/Passenger";
import { Pilot } from "./airport/employee/Pilot";
import {Airline} from "./airport/airline/Airline"
import { Booking } from "./Booking/Booking";
import { DateTime } from "./airport/flight/DateTime";

// Q1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)
let airport = new Airport("Siem Reap National Airport","Siem Reap");
// create trip ___________________________________________________
// let trip = new Trip("Cambodia","Wale");
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

let flight1 = new Flight(12,"Siem Reap","Bangkok","1hour",airoplan);
// let flight2 = new Flight(12,"Siem Reap","Bangkok","1hour",airoplan);

// airport.addFlights()

let passenger = new Passenger("1noong","pi");
let passenger2 = new Passenger("2pich","thun");
let passenger3 = new Passenger("3Rady","Y");
airoplan.addPassenger(passenger);
airoplan.addPassenger(passenger2);
airoplan.addPassenger(passenger3);
gateA10.setFlight(flight1);

// airport.addAiroplan(airoplan);
airport.addFlights(flight1);
airport.addFlights(flight1);
let seat = new Seat(1);
let seat2 = new Seat(2);
let seat3 = new Seat(3);

// let booking = new Booking(12,seat,true);
// booking.setSeat(seat);
// booking.addPassenger(passenger);


// console.log(flight.airoplan.passengers);
// console.log(booking);
// console.log(flight.airoplan.passengers[0].booking);



//Q2 As an airline manager, I want to know for a given flight, how many passengers have return tickets.
let dateTime1 = new DateTime(12,4,2023,4)
let booking1= new Booking(flight1,dateTime1,seat2,false,passenger2)
let booking2= new Booking(flight1,dateTime1,seat2,false,passenger2)
let booking3= new Booking(flight1,dateTime1,seat3,true,passenger3)
let airline = new Airline("Spirit Company");
flight1.airoplan.passengers[0].setBooking(booking1)
flight1.airoplan.passengers[1].setBooking(booking2)
flight1.airoplan.passengers[2].setBooking(booking3)

airline.addFlight(flight1);
airline.addFlight(flight1);
// test how many customer have return ticket
console.log(airline.getReturnTicket() + " customer have return ticket in a flight");


// let dateTime = new DateTime(1,2,3,2023)
// testing __________________________________________________________
// console.log(airport);


// Q3 As an airline pilot, I want to know, for a given date, how many flights I have to join.