import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-userinfopage',
  templateUrl: './userinfopage.component.html',
  styleUrls: ['./userinfopage.component.css']
})
export class UserinfopageComponent implements OnInit {

 
  //mentors []=MENTORS;
  //selectedMentor: Mentor;
  arrMentors:string[];

  constructor(private httpService :HttpClient) {

   }

  ngOnInit() {
    this.metorapp();
  }

  metorapp()
  {
    this.httpService.get('./assets/mentordatalist.json').subscribe(
      data => {
        this.arrMentors = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
}
