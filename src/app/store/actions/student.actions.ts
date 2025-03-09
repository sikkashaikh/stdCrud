import { createAction, props } from '@ngrx/store';
import { Student, Subject, Streams } from '../../models/student.model';

//Students Actions
export const loadStudents = createAction('[Student List] Load Students');
export const loadStudentsSuccess = createAction('[Student List] Load Students Success', props<{ students: Student[] }>());
export const loadStudentsFailure = createAction('[Student List] Load Students Failure', props<{ error: any }>());

export const addStudent = createAction('[Student List] Add Student', props<{ student: Student }>());
export const addStudentSuccess = createAction('[Student List] Add Student Success', props<{ student: Student }>());
export const addStudentFailure = createAction('[Student List] Add Student Failure', props<{ error: any }>());

export const updateStudent = createAction('[Student List] Update Student', props<{ student: Student }>());
export const updateStudentSuccess = createAction('[Student List] Update Student Success', props<{ student: Student }>());
export const updateStudentFailure = createAction('[Student List] Update Student Failure', props<{ error: any }>());

export const deleteStudent = createAction('[Student List] Delete Student', props<{ id: string }>());
export const deleteStudentSuccess = createAction('[Student List] Delete Student Success', props<{ id: string }>());
export const deleteStudentFailure = createAction('[Student List] Delete Student Failure', props<{ error: any }>());

//Stream Actions
export const loadStreams = createAction('[Stream List] Load Streams');
export const loadStreamsSuccess = createAction('[Stream List] Load Streams Success', props<{ streams: Streams[] }>());
export const loadStreamsFailure = createAction('[Stream List] Load Stream Failure', props<{ error: any }>());

//Subjects Actions
export const loadSubjects = createAction('[Subjects List] Load Subjects');
export const loadSubjectsSuccess = createAction('[Subjects List] Load Subjects Success', props<{ subjects: Subject[] }>());
export const loadSubjectsFailure = createAction('[Subjects List] Load Subjects Failure', props<{ error: any }>());
