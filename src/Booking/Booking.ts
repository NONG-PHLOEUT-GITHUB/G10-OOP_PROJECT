import { Seat } from "../airport/aroplane/Seat";
import { DateTime } from "../airport/flight/DateTime";
import { Flight } from "../airport/flight/Flight";
import { Passenger } from "../passenger/Passenger";
import { Meal } from "./Meal";

export class Booking {
    flights:Flight[]=[];
    passengers:Passenger;
    dateTime:DateTime;
    seat: Seat;
    meal?:Meal[]=[];
    returnTicket:boolean;
    constructor(flight:Flight[],dateTime:DateTime,seat:Seat,returnTicket: boolean,passenger:Passenger,meal:Meal[]) {
        this.flights = flight;
        this.dateTime = dateTime;
        this.seat = seat;
        this.returnTicket = returnTicket;
        this.passengers = passenger;
        this.meal = meal;
    }
    // find passenger have return ticket
    
    getSeat(){
        return this.seat;
    }


    addMeal(meal:Meal){
        this.meal.push(meal);
    }

    getMeals (flightNumber: string,date:DateTime): Meal[] {
        let countMeals:Meal[]=[];
            this.flights.forEach(flight =>{
                if(flight.flightNumber == flightNumber && flight.dateTime.isEqual(date)){
                   flight.bookings.forEach(booking=>{
                      booking.meal.forEach(meal=>{
                        countMeals.push(meal);
                      })
                   })
                     
                }
            })
        return countMeals;
    }


}
