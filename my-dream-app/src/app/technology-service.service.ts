import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyServiceService {
  private baseUrl='http://localhost:8761/course/technology';
  constructor(private http:HttpClient) {
   }
   createTechnology(course:Object):Observable<Object>{
     return  this.http.post(`${this.baseUrl}`,course);
   }
   getTechnology():Observable<Object>{
     return this.http.get<Object>(`${this.baseUrl}`);
   }
}