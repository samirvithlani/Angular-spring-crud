import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddstudentComponent } from './student/addstudent/addstudent.component';
import { StudentlistComponent } from './student/studentlist/studentlist.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';


const routes: Routes = [
  {
    path:'addstudent',component:AddstudentComponent
  },
  {
    path:'studentlist',component:StudentlistComponent
  },
  {
    path:'updatestudent/:id',component:UpdatestudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
