import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Student, Streams } from '../../models/student.model';
import { addStudent, loadStreams } from '../../store/actions/student.actions';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { selectAllStreams } from '../../store/selectors/student.selectors';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  studentForm: FormGroup;
  streams$: Observable<Streams[]>;

  constructor(private store: Store, private router: Router,private fb: FormBuilder) {
    this.streams$ = this.store.select(selectAllStreams);
    this.studentForm = this.fb.group({
      id: [0],
      name: [''],
      age: [0],
      streamid: ['']
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadStreams());
  }

  onSave(): void {
    //this.store.dispatch(addStudent({ student: this.studentForm.value}));// to add random id use below line
    this.store.dispatch(addStudent({ student: { ...this.studentForm.value, id: this.getRandomIntegerAsString() } }));
    this.router.navigate(['/']);
  }

  getRandomIntegerAsString(): string {
    const randomInt = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
    return randomInt.toString();
  }
}
