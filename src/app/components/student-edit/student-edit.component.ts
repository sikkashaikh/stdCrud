import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Student, Subject, Streams } from '../../models/student.model';
import { loadStreams, updateStudent } from '../../store/actions/student.actions';
import { selectStudentById, selectAllSubjects, selectAllStreams } from '../../store/selectors/student.selectors';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  student$: Observable<Student | undefined>;
  streams$: Observable<Streams[]>;
  studentForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private router: Router,
    private fb: FormBuilder
  ) {
    const id =(+this.route.snapshot.paramMap.get('id')!).toString();
    this.streams$ = this.store.select(selectAllStreams);
    this.student$ = this.store.select(selectStudentById(id));  


    this.studentForm = this.fb.group({
      id: [0],
      name: [''],
      age: [0],
      streamid: ['']
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadStreams());
    this.student$.subscribe(student => {
      if (student) {
        this.studentForm.patchValue(student);
      }
    });
  }

  onSave(): void {
    const updatedStudent = this.studentForm.value as Student;
    console.log(updatedStudent);
    // this.store.dispatch(updateStudent({ student: updatedStudent }));
    // this.router.navigate(['/']);
  }
}
