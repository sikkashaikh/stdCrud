import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from '../reducers/student.reducer';

export const selectStudentState = createFeatureSelector<State>('students');

export const selectAllStudents = createSelector(
  selectStudentState,
  (state: State) => state.students
);

export const selectStudentById = (id: string) => createSelector(
  selectStudentState,
  (state: State) => state.students.find(student => student.id == id)
);
export const selectStudentError = createSelector(
  selectStudentState,
  (state: State) => state.error
);

//Subject Selector
export const selectAllStreams = createSelector(
  selectStudentState,
  (state: State) => state.streams
);

//Subject Selector
export const selectAllSubjects = createSelector(
  selectStudentState,
  (state: State) => state.subjects
);