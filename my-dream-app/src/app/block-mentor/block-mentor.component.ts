import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MentorserviceService } from '../mentorservice.service';
import { MentorSignup } from '../mentor-signup';

@Component({
  selector: 'app-block-mentor',
  templateUrl: './block-mentor.component.html',
  styleUrls: ['./block-mentor.component.css']
})
export class BlockMentorComponent implements OnInit {
  mentors: any;
  constructor(private router : Router, private http: HttpClient, private mentorservice : MentorserviceService) {}

  ngOnInit() {
    this.showDetails();
  }
  blockMentor(temp:string){
    console.log("inside delete"+temp);
    this.mentorservice.blockMentor(this.mentors,temp)
    .subscribe(
      data => {
        console.log(data);
        this.showDetails();
      },
      error => console.log(error));
}
   
 showDetails(){
   console.log("inside show details of block component");
   this.mentorservice.getMentor().subscribe((data) => {
     this.mentors = data;
     console.log(data);
   });
 }
}
