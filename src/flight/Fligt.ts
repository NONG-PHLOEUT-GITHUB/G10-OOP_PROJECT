export class Flight {
    private flightNumber: number;
    private departureAirport: string;
    private arrivalAirport: string;
    private duration: number;
    constructor(flightNumber: number, departureAirport: string, arrivalAirport: string,duration: number) {
        this.flightNumber = flightNumber;
        this.departureAirport = departureAirport;
        this.arrivalAirport = arrivalAirport;
        this.duration = duration;
    }
}