import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrlStudent = "http://localhost:8000/api/students";

  constructor(private http: HttpClient) { }

  getStudentList(): Observable<any> {
    return this.http.get(`${this.baseUrlStudent}`)
  }

  getStudentById(id: string): Observable<object> {
    return this.http.get(`${this.baseUrlStudent}/${id}`);
  }

  createStudent(room: any): Observable<object> {
    return this.http.post(`${this.baseUrlStudent}`, room);
  }

  updateStudent(id: string, room: any): Observable<object> {
    return this.http.put(`${this.baseUrlStudent}/${id}`, room);
  } 

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrlStudent}/${id}`);
  }

  deleteAllStudents(): Observable<any> {
    return this.http.delete(`${this.baseUrlStudent}`);
  }
}
