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
import { Chef } from "./airport/employee/Chef";
import { Flight_attendant } from "./airport/employee/Flight_attendant";
import { Beg } from "./passenger/Beg";
import { Layout } from "./airport/aroplane/Layout";


// Q1. As an airport controller, I need to get the full details of a passenger’s trip from their Booking 
// Reference Number (flights, bags, customer information…)
let airport = new Airport("Siem Reap National Airport","Siem Reap");
// create airline _________________________________________________
let cambodiaAngkorAir = new Airline("Cambodia Angkor Air");
let airAsia = new Airline("Air Asia");
let cambodiaAirways = new Airline("Cambodia Airways");

airport.addAirline(cambodiaAngkorAir);
airport.addAirline(airAsia);

// create gate ____________________________________________________

let gateA10 = new Gate("A 10");
let gateA11 = new Gate("A 11");
let gateA12 = new Gate("A 12");
airport.addGate(gateA10);
airport.addGate(gateA11);
airport.addGate(gateA12);

// create dateTime__________________________________________________
let dateTime1 = new DateTime(12,4,2023,4);
let dateTime2 = new DateTime(12,4,2023,4);
// create employee__________________________________________________

let pilot1 = new Pilot("Nong","dd",10);
let pilot2 = new Pilot("Srey Pich","dd",10);

// create employee flight attentane_________________________________
let flight_attenden = new Flight_attendant("jj","ki",10);
/// create seat ____________________________________________________________

let seat = new Seat(1,SeatType.busseness_class);
let seat2 = new Seat(2,SeatType.economy_class);
let seat3 = new Seat(3,SeatType.busseness_class);

// create layout ____________________________________________________

let layout = new Layout("A1","B2");

// create airoplane _________________________________________________

let airoplane = new Airoplan("OA-LWP");
airoplane.addLayouts(layout);
layout.addSeat(seat);

// add employee to airport __________________________________________

airport.addEmployee(pilot1);
airport.addEmployee(pilot2);
airport.addEmployee(flight_attenden);

// create flight ____________________________________________________

let flight1 = new Flight("AY6404","Siem Reap","Bangkok","1 hour");
let flight2 = new Flight("KL018","Siem Reap","Singapor","1 hour");
let flight3 = new Flight("TK8248","Phnom Penh","Singapor","2 hour");
flight1.setAroplane(airoplane);

// create passenger_______________________________________________________
let passenger1 = new Passenger("noong","pi");
let passenger2 = new Passenger("pich","thun");
let passenger3 = new Passenger("Rady","Y");

let beg1 = new Beg(3);
let beg2 = new Beg(1);

passenger1.addBeg(beg1);
passenger1.addBeg(beg2);


// add airoplane to airport______________________________________________

airport.addAiroplan(airoplane);


// add flight to gate ____________________________________________________

gateA10.addFlight(flight1);

/// add dat time to flight________________________________________________

flight1.setDateTime(dateTime1);
flight2.setDateTime(dateTime2);
flight1.addPilot(pilot1);
pilot1.addFlight(flight2);

// add flight to airport___________________________________________________

airport.addFlights(flight1);
airport.addFlights(flight2);

// airline.addFlights_______________________________________________________
airAsia.addFlight(flight1);
cambodiaAngkorAir.addFlight(flight1);
cambodiaAirways.addFlight(flight3);




/// passenger booking flight________________________________________________________________
let booking1 = new Booking(1,[flight1,flight2],dateTime1,seat,true,passenger1,[Meal.Halal,Meal.Halal,Meal.Kosher]);
let booking2 = new Booking(2,[flight2],dateTime2,seat2,true,passenger2,[Meal.Halal,Meal.Halal,Meal.Kosher]);
let booking3 = new Booking(3,[flight3],dateTime1,seat3,false,passenger3,[Meal.Halal,Meal.Vegetarian]);

airAsia.addBookings(booking1);
cambodiaAngkorAir.addBookings(booking1);
airAsia.addBookings(booking1);
cambodiaAngkorAir.addBookings(booking2);
cambodiaAirways.addBookings(booking3);

// console.log(cambodiaAngkorAir.getFlight());

passenger1.addBooking(booking1);


// testing __________________________________________________________
//Q2 As an airline manager, I want to know for a given flight, how many passengers have return tickets.
// console.log(airAsia.getReturnTicket("AY6404"));

// ____________________________________________________________________
// 3. As an airline pilot, I want to know, for a given date, how many flights I have to join.
// console.log(airport.getFlights(pilot1,dateTime));

// ____________________________________________________________________
// 4. As an airline chef, I need to know, for a given flight, how many of each meal type I need to prepare.
// console.log(cambodiaAngkorAir.getMeals("AY6404",dateTime));

// _____________________________________________________________
// 5. As an airline manager, I want to find out how much salary I pay all my employees
// console.log(airport.findSalary() + "$ is total of employee");
// _____________________________________________________________________
//Q6. As a passenger, I want to know which gate my plane is waiting at.
// console.log(airport.getGateNumber("AY6404",dateTime)); // by flight number and datetime

// ________________________________________________________________



// console.log(airAsia.bookings);
// console.log(cambodiaAngkorAir);

//  get all begs
// console.log(airport.getAllBegs());


// console.log(flight1);
