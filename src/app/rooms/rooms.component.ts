import { Component, OnInit } from '@angular/core';
import { ROOMS } from '../mock-assets/mock-rooms';
import { Room } from '../models/room-model/room.model';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[] = ROOMS;

  constructor() { }

  ngOnInit(): void {

  }
}
