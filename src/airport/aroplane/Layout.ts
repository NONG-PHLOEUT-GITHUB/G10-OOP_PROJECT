import { Seat } from "./Seat";

export class Layout {
    row: string;
    column: string;
    seats: Seat[]=[];
    constructor(row: string, column: string){
        this.row = row;
        this.column = column;
    }
}