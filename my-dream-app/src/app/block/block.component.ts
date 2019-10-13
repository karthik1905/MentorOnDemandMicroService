import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent implements OnInit {
  users:any;
  constructor(private router : Router, private http: HttpClient, private userservice:UserserviceService) {}

  ngOnInit() {
    this.showDetails();
  }
  blockUser(temp:string){
    console.log("inside delete"+temp);
    this.userservice.blockUser(this.users,temp)
    .subscribe(
      data => {
        console.log(data);
        this.showDetails();
      },
      error => console.log(error));
}
   
 showDetails(){
   console.log("inside show details of block component");
   this.userservice.getCourse().subscribe((data) => {
     this.users = data;
     console.log(data);
   });
 }
}
