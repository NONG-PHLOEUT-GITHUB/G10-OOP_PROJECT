export class DateTime  {
    private day:number;
    private month:number;
    private year:number;
    private time:number;
    constructor( day:number,month:number,year:number,time:number) {
        this.day = day;
        this.month = month;
        this.year = year;
        this.time = time;
    }
}