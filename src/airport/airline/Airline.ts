import { Booking } from "../../booking/Booking";
import { Meal } from "../../booking/Meal";
import { Passenger } from "../../passenger/Passenger";
import { Seat } from "../aroplane/Seat";
import { DateTime } from "../flight/DateTime";
import { Flight } from "../flight/Flight";
 export class Airline{
    companyName: string;
    flights:Flight[]=[];
    bookings:Booking[]=[];

    constructor(companyName: string){
        this.companyName = companyName;
    }

    addFlight(flight:Flight){
        this.flights.push(flight)
    }

    addBookings(booking:Booking){
        this.bookings.push(booking);
    }


    // return ticket --------------------------------
    getReturnTicket(flightNumber:string):Passenger[]{
        let count:Passenger[] = [];
        this.bookings.forEach(allBooking =>{
            allBooking.flights.forEach(fl =>{
              if(fl.flightNumber === flightNumber) {
                    if(allBooking.returnTicket === true){
                        count.push(allBooking.passengers);
                    }
                }
            })
        })
        return count;
    }

    getFlight(){
        return this.flights;
    }


    getMeals(flightNumber: string,date:DateTime):Meal[]{
        let countMeals:Meal[]=[];
        this.bookings.forEach(allBooking =>{
            allBooking.flights.forEach(fl =>{
                if(fl.flightNumber === flightNumber && fl.dateTime.isEqual(date)) {
                    allBooking.meal.forEach(meal=>{
                        countMeals.push(meal)
                    })
                }
            })
        })
        return countMeals;
    }
}
