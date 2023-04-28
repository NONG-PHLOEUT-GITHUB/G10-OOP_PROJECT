import { Booking } from "./Booking";

export class BookingManagement {
    bookings:Booking[]=[];

    addBooking(booking:Booking){
        this.bookings.push(booking);
    }
    getBooking(){
        return this.bookings;
    }

}