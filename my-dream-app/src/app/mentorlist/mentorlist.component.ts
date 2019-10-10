import { Component, OnInit } from '@angular/core';
import { MENTORS } from '../mentor-data';
import { Mentor } from '../mentor';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


import { AppComponent } from 'src/app/app.component';
import { MentorserviceService } from '../mentorservice.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MentorSignup } from '../mentor-signup';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-mentorlist',
  templateUrl: './mentorlist.component.html',
  styleUrls: ['./mentorlist.component.css']
})
export class MentorlistComponent implements OnInit {
  courseForm: FormGroup;
  mentors : MentorSignup[]=[];

  //mentors []=MENTORS;
  // //selectedMentor: Mentor;
  // arrMentors:string[];

  constructor(private httpService :HttpClient,private mentorservice :MentorserviceService,private formbuilder : FormBuilder) {

    this.courseForm= new FormGroup({
      course : new FormControl('')
    })

   }

   
  ngOnInit() {
    // this.metorapp();
    // this.reloadData();
    this.onSubmit();
    console.log("inside oninit mentorlist");
  }
  
  
  onSubmit() {
    this.mentorservice.getMentorList(this.courseForm.get('course').value).subscribe((data) => {
      this.mentors = data;
    })
  }
  metorapp()
  {
    this.httpService.get('./assets/mentordatalist.json').subscribe(
      data => {
        // this.arrMentors = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }


  // onSubmitCourse(){
  //   this.mentorservice.getMentorCourse(this.courseForm.get('course').value).subscribe(data => {
  //   this.mentorCourse=data;

  //   })
  // }

}
