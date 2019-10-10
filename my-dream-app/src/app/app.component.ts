import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  constructor (private httpService: HttpClient) { }
  arrMentors: string [];

  ngOnInit () {
    
  }

  mentorcall(){
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
