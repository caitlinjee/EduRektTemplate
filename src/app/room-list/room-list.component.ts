import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Room } from '../model-service/room/room';
import {RoomService} from '../model-service/room/room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  rooms = new MatTableDataSource<Room>();
  tableColumns: string[] = ['code', 'name', 'address', 'max_capacity'];

  constructor(
    private roomService: RoomService,
  ) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.roomService.getRoomList().subscribe(
      (data: Room[]) => {
        this.rooms.data = data;
      }
    );
  }

}
