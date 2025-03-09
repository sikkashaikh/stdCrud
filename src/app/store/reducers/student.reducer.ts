import { createReducer, on } from '@ngrx/store';
import { Student, Subject, Streams } from '../../models/student.model';
import * as StudentActions from '../actions/student.actions';

export interface State {
  students: Student[];
  subjects: Subject[];
  streams: Streams[];
  error: any;
}

export const initialState: State = {
  students: [],
  subjects:[],
  streams:[],
  error: null,
};

export const studentReducer = createReducer(
  initialState,
  on(StudentActions.loadStudentsSuccess, (state, { students }) => ({ ...state, students })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({ ...state, error })),
  on(StudentActions.addStudentSuccess, (state, { student }) => ({ ...state, students: [...state.students, student] })),
  on(StudentActions.addStudentFailure, (state, { error }) => ({ ...state, error })),
  on(StudentActions.updateStudentSuccess, (state, { student }) => ({
    ...state,
    students: state.students.map(s => (s.id === student.id ? student : s)),
  })),
  on(StudentActions.updateStudentFailure, (state, { error }) => ({ ...state, error })),
  on(StudentActions.deleteStudentSuccess, (state, { id }) => ({
    ...state,
    students: state.students.filter(student => student.id !== id),
  })),
  on(StudentActions.deleteStudentFailure, (state, { error }) => ({ ...state, error })),

  on(StudentActions.loadStreamsSuccess, (state, { streams }) => ({ ...state, streams })),
  on(StudentActions.loadStreamsFailure, (state, { error }) => ({ ...state, error })),

  on(StudentActions.loadSubjectsSuccess, (state, { subjects }) => ({ ...state, subjects })),
  on(StudentActions.loadStudentsFailure, (state, { error }) => ({ ...state, error })),
);
