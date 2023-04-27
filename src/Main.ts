import { Airport } from "./Airport";
import { Flight } from "./airport/flight/Flight";
import { Gate } from "./airport/gate/Gate";
import { Airoplan } from "./airport/aroplane/Airoplan";
import { Seat } from "./airport/aroplane/Seat";
import { Passenger } from "./passenger/Passenger";
import { Pilot } from "./airport/employee/Pilot";
import { Airline } from "./airport/airline/Airline"
import { DateTime } from "./airport/flight/DateTime";
import { Booking } from "./booking/Booking";
import { SeatType } from "./airport/aroplane/SeatType";
import { Meal } from "./booking/Meal";


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

let pilot1 = new Pilot("Nong","dd",2000);
let pilot2 = new Pilot("Srey Pich","dd",2000);

// create airoplane _________________________________________________
let airoplan = new Airoplan("OA-LWP",pilot2);

// create flight ____________________________________________________

let flight1 = new Flight(12,"Siem Reap","Bangkok","1 hour",airoplan);
let flight2 = new Flight(13,"Siem Reap","Singapor","1 hour",airoplan);

// airport.addFlights()

let passenger = new Passenger("1noong","pi");
let passenger2 = new Passenger("2pich","thun");
let passenger3 = new Passenger("3Rady","Y");
airoplan.addPassenger(passenger);
airoplan.addPassenger(passenger2);
airoplan.addPassenger(passenger3);
gateA10.addFlight(flight1);
/// create dateTime___________________________________________________________
let dateTime = new DateTime(1,2,3,2023);
let dateTime2 = new DateTime(1,2,3,2023);
flight1.setDateTime(dateTime);
flight2.setDateTime(dateTime2);

// airport.addAiroplan(airoplan);
airport.addFlights(flight1);
airport.addFlights(flight2);
let seat = new Seat(1,SeatType.busseness_class);
let seat2 = new Seat(2,SeatType.economy_class);
let seat3 = new Seat(3,SeatType.busseness_class);

// let booking = new Booking(12,seat,true);
// booking.setSeat(seat);
// booking.addPassenger(passenger);


// console.log(flight.airoplan.passengers);
// console.log(booking);
// console.log(flight.airoplan.passengers[0].booking);



//Q2 As an airline manager, I want to know for a given flight, how many passengers have return tickets.
let dateTime1 = new DateTime(12,4,2023,4)
let booking1= new Booking(flight1,dateTime1,seat,true,passenger,Meal.Halal)
// let booking2= new Booking(flight1,dateTime1,seat2,true,passenger2)
// let booking3= new Booking(flight2,dateTime1,seat3,false,passenger3)
let airline = new Airline("Spirit Company");
flight1.airoplan.passengers[0].setBooking(booking1)
// flight2.airoplan.passengers[1].setBooking(booking2)
// flight1.airoplan.passengers[2].setBooking(booking3)

airline.addFlight(flight1);
airline.addFlight(flight2);

// console.log(airline.getReturnTicket() + " customer");

// console.log(airline);


// testing __________________________________________________________

// 3. As an airline pilot, I want to know, for a given date, how many flights I have to join.

// console.log(airport.getFlights(pilot1,dateTime));

// get gate for passenger waiting by flight number

// console.log(airport.getGate(12,dateTime));
// console.log(airport.getFlight());
console.log(airport.getMeals(12,dateTime));





// console.log(airport);


