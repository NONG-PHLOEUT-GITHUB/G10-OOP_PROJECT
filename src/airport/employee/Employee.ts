export abstract class Employee{
    public firstName: string;
    public lastName: string;
    public salary: number;
    constructor(firstName: string, lastName: string,salary: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    abstract getFirstName():string;
    abstract getLastName():string;
    abstract getSalary():number;
}