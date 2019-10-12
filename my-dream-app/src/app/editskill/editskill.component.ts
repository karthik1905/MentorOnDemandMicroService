import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CourseDetail } from '../course-detail';
import { Router } from '@angular/router';
import { CourseServiceService } from '../course-service.service';
import { TechnologyDetail } from '../technology-detail';
import { TechnologyServiceService } from '../technology-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editskill',
  templateUrl: './editskill.component.html',
  styleUrls: ['./editskill.component.css']
})
export class EditskillComponent implements OnInit {

  editForm: FormGroup;
  skills : any;
  temp:string;
  submitted = false;
  courseObj:CourseDetail = new CourseDetail();
  // technologyObj : TechnologyDetail = new TechnologyDetail();
  constructor(private formBuilder: FormBuilder,private router: Router,private courseservice: CourseServiceService,private http : HttpClient) { 
    this.editForm= new FormGroup({
      courseName : new FormControl(''),
      PreRequities: new FormControl(''),
      fee: new FormControl(''),
      toc: new FormControl('')
    })

  }

  ngOnInit() {
    this.showDetails();
    this.onCreate();
    }
    deleteSkill(temp:string){
     console.log("inside delete");
     this.courseservice.deleteSkill(temp)
     .subscribe(
       data => {
         console.log(data);
       },
       error => console.log(error));
 }
    
  showDetails(){
    this.courseservice.getCourse().subscribe((data) => {
      this.skills = data;
      console.log(data);
    });
  }
  onCreate(){
    console.log("indiede onsubmit of course");
    console.log("course name"+this.editForm.get('courseName').value);
    this.courseObj.courseName=this.editForm.get('courseName').value;
    console.log("prereqities"+this.editForm.get('PreRequities').value);
    this.courseObj.preRequities=this.editForm.get('PreRequities').value;
    console.log("toc"+this.editForm.get('toc').value);
    this.courseObj.toc=this.editForm.get('toc').value;
    this.courseObj.totalFee=this.editForm.get('fee').value;
      this.courseservice.createCourse(this.courseObj).subscribe(data=>console.log(data),error=>console.log(error));
  }
}
