import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public addStudent(student):Observable<any>{

    return this.http.post("http://localhost:8080/student/addstudent",student);
  }
  public listStudent():Observable<any>{

    return this.http.get("http://localhost:8080/student/getstudents");
  }
  public deleteStudent(sId):Observable<any>{

    return this.http.delete("http://localhost:8080/student/deletestudent/"+sId);
  }
  public updateStudent(sId:any,student:any):Observable<any>{

    return this.http.put("http://localhost:8080/student/updatestudent/"+sId,student);
  }
  public getStudentById(sid:any):Observable<any>{

    return this.http.get("http://localhost:8080/student/getstudent/"+sid);
  }
}
