import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  constructor(private service:StudentService,private roter:ActivatedRoute) { }

  sId :number;
  studentGroup = new FormGroup({
    sName:new FormControl(''),
    sAge:new FormControl(''),
    sEmail:new FormControl(''),
    sPhone:new FormControl(''),
    sPassword:new FormControl('')
  })
  student:any;
  updateStudent(){
    
    this.service.updateStudent(this.sId,this.studentGroup.value).subscribe(res=>{
      if(res.status ===200){
        alert(res.message)
      }
    })
  }
  ngOnInit() {
    this.sId = this.roter.snapshot.params.id;
    this.service.getStudentById(this.sId).subscribe(res=>{
      this.student=res;
    })

  }

}
