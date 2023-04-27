import { Passenger } from "../../passenger/Passenger";
import { SeatType } from "./SeatType";

export class Seat {
    seatNumber: number;
    seatType: SeatType;
    passenger?:Passenger=undefined;

    constructor(seatNumber: number,seatType: SeatType) {
        this.seatNumber = seatNumber;
        this.seatType = seatType;
    }

    setPassenger(passenger: Passenger){
        this.passenger = passenger;
    }

    hasPassenger(){
        return this.passenger !== undefined;
    }

    getPassenger(){
        return this.passenger;
    }

    removePassenger(){
        this.passenger = undefined;
    }

    getSeat() {
       return this.seatNumber;
    }
    getTypeSeat() {
        return this.seatType;
    }

    isEqual(other:Seat): boolean{
        let result:boolean = false
        if(this.getSeat() === other.seatNumber && this.getTypeSeat() === other.seatType){
            result = true;
        }
        return result
        
    }
}