import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Student, Subject, Streams } from '../../models/student.model';
import { loadStudents, deleteStudent } from '../../store/actions/student.actions';
import { selectAllStudents } from '../../store/selectors/student.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students$: Observable<Student[]>;
  constructor(private store: Store, private router: Router) {
    this.students$ = this.store.select(selectAllStudents);
  }

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
  }

  onDelete(id: string): void {
    this.store.dispatch(deleteStudent({ id }));
  }
  onEdit(id: string): void {
    this.router.navigate(['/edit', id]);
  }
}
