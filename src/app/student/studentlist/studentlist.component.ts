import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private service:StudentService) { }
  students:any;
  ngOnInit() {

      this.service.listStudent().subscribe(res=>{
        this.students=res;
      })
  }
  deleteStudent(sId){
    this.service.deleteStudent(sId).subscribe(res=>{

        if(res.status===200){
          alert(res.message)
          this.ngOnInit();
        }
    })
  }

}
