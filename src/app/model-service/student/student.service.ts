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

  createStudent(student: any): Observable<object> {
    return this.http.post(`${this.baseUrlStudent}`, student);
  }

  updateStudent(id: string, student: any): Observable<object> {
    return this.http.put(`${this.baseUrlStudent}/${id}`, student);
  } 

  deleteStudent(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrlStudent}/${id}`);
  }

  deleteAllStudents(): Observable<any> {
    return this.http.delete(`${this.baseUrlStudent}`);
  }
}
