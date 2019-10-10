import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MentorserviceService } from '../mentorservice.service';
import { MentorSignup } from '../mentor-signup';

@Component({
  selector: 'app-msignup',
  templateUrl: './msignup.component.html',
  styleUrls: ['./msignup.component.css']
})
export class MSignupComponent implements OnInit {
  registerMentorForm: FormGroup;
  submitted = false;
  mentorObj:MentorSignup=new MentorSignup();
  // mentorObj:MentorSignup = new MentorSignup();
  constructor(private formBuilder: FormBuilder,private router: Router,private mentorservice: MentorserviceService) { }

  ngOnInit() {
    this.registerMentorForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      linkedin: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  get g() { return this.registerMentorForm.controls; }
  onSubmitMentor() {
    this.submitted = true;
    this.mentorObj.email=this.registerMentorForm.get('email').value;
    this.mentorObj.password=this.registerMentorForm.get('password').value;
    this.mentorObj.firstName=this.registerMentorForm.get('firstName').value;
    this.mentorObj.lastName=this.registerMentorForm.get('lastName').value;
    // this.mentorObj.contactNumber=this.registerMentorForm.get('contactNumber').value;
    // this.mentorObj.yearsOfExperience=this.registerMentorForm.get('yoe').value;
    this.mentorObj.linkedIn=this.registerMentorForm.get('linkedin').value;
    this.mentorObj.status="inuse";
    // this.mentorObj.timeGap=this.registerMentorForm.get('timeGap').value;
    this.mentorservice.createMentor(this.mentorObj).subscribe(data=>console.log(data),error=>console.log(error));

    // stop here if form is invalid
    if (this.registerMentorForm.invalid) {
        return;
    }
    this.router.navigate(['/signin']);
  }
}
