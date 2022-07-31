import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private service:StudentService) { }

  studentGroup = new FormGroup({
    sName:new FormControl(''),
    sAge:new FormControl(''),
    sEmail:new FormControl(''),
    sPhone:new FormControl(''),
    sPassword:new FormControl('')
  })

  addStundent(){
    this.service.addStudent(this.studentGroup.value).subscribe(res=>{
      if(res.status ===200){
        alert(res.message)
      }
    })
  }

  ngOnInit() {

  }

}
