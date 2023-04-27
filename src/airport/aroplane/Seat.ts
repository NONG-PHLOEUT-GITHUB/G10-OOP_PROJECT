import { SeatType } from "./SeatType";

export class Seat {
    seatNumber: number;
    seatType: SeatType;
    constructor(seatNumber: number) {
        this.seatNumber = seatNumber;
    }
}