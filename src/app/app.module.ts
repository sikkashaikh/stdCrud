import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { studentReducer } from './store/reducers/student.reducer';
import { StudentEffects } from './store/effects/student.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentEditComponent } from './components/student-edit/student-edit.component'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    StoreModule.forRoot({ students: studentReducer }),
    EffectsModule.forRoot([StudentEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
