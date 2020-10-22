import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RoomListComponent} from './room-list/room-list.component';
import {StudentListComponent} from './student-list/student-list.component';

const routes: Routes = [
  {path: 'room', component: RoomListComponent},
  {path: 'student', component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
