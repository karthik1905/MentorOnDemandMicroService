import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MentorSignup } from './mentor-signup';
import { MSignupComponent } from './msignup/msignup.component';

@Injectable({
  providedIn: 'root'
})
export class MentorserviceService {
  private baseUrl='http://localhost:8761/mentor/';
  constructor(private http:HttpClient) {
   }
   createMentor(mentor:Object):Observable<Object>{
     return  this.http.post(`${this.baseUrl}`+'mentor',mentor);
   }
   getMentorCred(email:string):Observable<MentorSignup>{
     console.log("in getmentorcred");
    return this.http.get<MentorSignup>(`${this.baseUrl}` +'mentor/'+email);
  }
  getMentorList(course:string): Observable<MentorSignup[]> {
    console.log("inside getmentorlist and the course is"+course);
    return this.http.get<MentorSignup[]>(`${this.baseUrl}`+'mentor/course/'+course);
  }
}
