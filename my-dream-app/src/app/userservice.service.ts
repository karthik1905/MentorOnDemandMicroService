import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { UserSignup } from './user-signup';
import { MentorsignupcompletedComponent } from './mentorsignupcompleted/mentorsignupcompleted.component';
import { MentorSignup } from './mentor-signup';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private baseUrl='http://localhost:8761/user/';
  constructor(private http:HttpClient) {
   }
   createUser(user:Object):Observable<Object>{
     return  this.http.post(`${this.baseUrl}`+'user',user);
   }
   getUserCred(email:string):Observable<UserSignup>{
    return this.http.get<UserSignup>(`${this.baseUrl}` + 'user/'+email);
  } 
  blockUser(user:UserSignup,email:string):Observable<UserSignup>{
    return this.http.put<UserSignup>(`${this.baseUrl}`+'email',user);
  }
  
  getCourse():Observable<Object>{
    return this.http.get<Object>(`${this.baseUrl}`);
  }
}