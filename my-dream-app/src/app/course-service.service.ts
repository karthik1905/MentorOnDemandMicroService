import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CourseDetail } from './course-detail';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  private baseUrl='http://localhost:8761/course/course';
  constructor(private http:HttpClient) {
   }
   createCourse(course:Object):Observable<Object>{
     console.log("inside createcourse");
     return  this.http.post(`${this.baseUrl}`,course);
   }
   
   getCourse():Observable<Object>{
    return this.http.get<Object>(`${this.baseUrl}`);
  }
  deleteSkill(coursename:string):Observable<CourseDetail>{
    return this.http.get<CourseDetail>(`${this.baseUrl}`+"/"+coursename);
  }
}
