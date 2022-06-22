import { Customer } from "../customer-model/customer.model";
import { Employee } from "../employee-model/employee.model";

export class Room {
    private roomID: number;
    private roomType: string;
    private available: boolean;
    private pricePerNight: number;
    private customer: Customer;
    private employee: Employee;
    imageSrc: string;

    constructor(roomID: number, roomType: string, pricePerNight: number, imageSrc: string) {
        this.roomID = roomID;
        this.roomType = roomType;
        this.available = true;
        this.pricePerNight = pricePerNight;
        this.customer = new Customer();
        this.employee = new Employee();
        this.imageSrc = imageSrc;
    }

    /* ----- Getter and Setter functions ----- */

    // Get/set room id
    getRoomID(): number {
        return this.roomID;
    }
    setRoomID(newID: number): void {
        this.roomID = newID;
    }

    // Get/set room type
    getRoomType(): string {
        return this.roomType;
    }
    setRoomType(newRoomType: string): void {
        this.roomType = newRoomType;
    }

    // Get/set room availability
    getAvailable(): boolean {
        return this.available;
    }
    setAvailable(newAvailablility: boolean): void {
        this.available = newAvailablility;
    }

    // Get/set room price per night
    getRoomPricePerNight(): number {
        return this.pricePerNight;
    }
    setRoomPricePerNight(newPrice: number): void {
        this.pricePerNight = newPrice;
    }

    // Get/set room customer
    getCustomer(): Customer {
        return this.customer;
    }
    setCustomer(newCustomer: Customer): void {
        this.customer = newCustomer;
    }

    // Get/set room customer
    getEmployee(): Employee {
        return this.employee;
    }
    setEmployee(newEmployee: Employee): void {
        this.employee = newEmployee;
    }

    // Get/set room image
    getImageSrc(): string {
        return this.imageSrc;
    }
    setImageSrc(newImageSrc: string): void {
        this.imageSrc = newImageSrc;
    }
}
