import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignup } from '../user-signup';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerUserForm: FormGroup;
  submitted = false;
  userObj:UserSignup = new UserSignup();
  constructor(private formBuilder: FormBuilder,private router: Router,private userservice: UserserviceService) { }

  ngOnInit() {
    console.log("inside onin");
      this.registerUserForm = this.formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerUserForm.controls; }

  onSubmitUser() {
      console.log("inside onsubbmit");
      this.submitted = true;
      this.userObj.email=this.registerUserForm.get('email').value;
      this.userObj.password=this.registerUserForm.get('password').value;
      this.userObj.firstName=this.registerUserForm.get('firstName').value;
      this.userObj.lastName=this.registerUserForm.get('lastName').value;
      this.userObj.status="inuse";
      this.userservice.createUser(this.userObj).subscribe(data=>console.log(data),error=>console.log(error));

      // stop here if form is invalid
      if (this.registerUserForm.invalid) {
          return;
      }
      this.router.navigate(['/signin']);
}

// onSubmitMentor() {
//   this.submitted = true;

//   // stop here if form is invalid
//   if (this.registerMentorForm.invalid) {
//       return;
//   }
//   this.router.navigate(['/signin']);
// }
}