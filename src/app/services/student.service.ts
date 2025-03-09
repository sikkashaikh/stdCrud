import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student, Subject , Streams} from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl_std = 'http://localhost:3000/students'; // Adjust the API endpoint as needed
  private apiUrl_stream= 'http://localhost:3000/streams'; // Adjust the API endpoint as needed
  private apiUrl_sub = 'http://localhost:3000/subjects'; // Adjust the API endpoint as needed
  

  constructor(private http: HttpClient) {}

  //Students API
  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.apiUrl_std);
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.apiUrl_std, student);
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(`${this.apiUrl_std}/${student.id}`, student);
  }

  deleteStudent(id: string): Observable<void> {    
    return this.http.delete<void>(`${this.apiUrl_std}/${id}`);
  }

   //Stream API
   getStreams(): Observable<Streams[]> {
    return this.http.get<Streams[]>(`${this.apiUrl_stream}`);
  }
  //Subjects API
  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiUrl_sub}`);
  }
  
}
