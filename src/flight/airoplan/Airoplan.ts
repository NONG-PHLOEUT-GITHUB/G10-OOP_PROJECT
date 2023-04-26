
import { Layout } from "./Layout";
import { Seat } from "./Seat";
export class Airoplan {
    registrationNumber: string;
    layout: Layout;
    constructor(registration: string){
        this.registrationNumber = registration;
    }
}