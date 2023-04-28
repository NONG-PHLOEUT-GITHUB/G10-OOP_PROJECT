import { Seat } from "./Seat";

export class Layout {
    row: string;
    column: string;
    seats: Seat[]=[];
    constructor(row: string, column: string){
        this.row = row;
        this.column = column;
    }

    getNumberOfSeat(): number {
        return this.seats.length
    }

    getAllSeat(): Seat[] {
        return this.seats;
    }

    addSeat(seat: Seat){
        this.seats.push(seat);
    }

 


}