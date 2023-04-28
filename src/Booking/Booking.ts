import { Seat } from "../airport/aroplane/Seat";
import { DateTime } from "../airport/flight/DateTime";
import { Flight } from "../airport/flight/Flight";
import { Passenger } from "../passenger/Passenger";
import { Meal } from "./Meal";

export class Booking {
    passengers:Passenger;
    seat: Seat;
    dateTime:DateTime;
    flights:Flight;
    returnTicket:boolean;
    meal?:Meal[]=[];
    constructor(flight:Flight,dateTime:DateTime,seat:Seat,returnTicket: boolean,passenger:Passenger,meal:Meal[]) {
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


    getMeals (flightNumber: string,date:DateTime): any {
        let countMeals:Meal[] = [];
            if(this.flights.flightNumber == flightNumber && this.flights.dateTime.isEqual(date)){
               countMeals = this.meal;   
            }
        return countMeals;
    }


}
