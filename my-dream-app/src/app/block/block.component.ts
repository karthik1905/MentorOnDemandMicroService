import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '@angular/common/http';
import { UserSignup } from '../user-signup';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
users: any;
  constructor(private router : Router, private http: HttpClient, private userservice:UserserviceService) {}

  ngOnInit() {
  }
  blockUser(temp:string){
    console.log("inside delete");
    this.userservice.blockUser(temp)
    .subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
}
   
 showDetails(){
   this.userservice.getCourse().subscribe((data) => {
     this.users = data;
     console.log(data);
   });
 }
}
