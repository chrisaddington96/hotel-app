import { Room } from "../models/room-model/room.model";

export const ROOMS: Room[] = [
    new Room(1, 'Queen Suite', 50, 'assets/mock-room-imgs/queen.jpg'),
    new Room(2, 'King Suite', 75, 'assets/mock-room-imgs/king.jpg'),
    new Room(3, 'Executive Suite', 100, 'assets/mock-room-imgs/executive.jpg'),
    new Room(4, 'Honeymoon Beds', 150, 'assets/mock-room-imgs/honeymoon.jpg'),
    new Room(5, 'Presidential Suite', 200, 'assets/mock-room-imgs/presidential.jpg')
];

