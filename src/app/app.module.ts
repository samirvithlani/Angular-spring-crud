import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';

@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    StudentlistComponent,
    UpdatestudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
