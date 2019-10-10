import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 
import { UserserviceService } from '../userservice.service';
import { UserSignup } from '../user-signup';
import { MentorserviceService } from '../mentorservice.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  registerForm: FormGroup;
  registerMForm : FormGroup;
  submitted = false;
    email:string;
    password:string;
    // userObj:UserSignup = new UserSignup();
    // userObj : UserSignup[];
  admin: any;
    constructor(private formBuilder: FormBuilder,private router: Router, private userservice : UserserviceService,private mentorservice : MentorserviceService) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]],
          password: ['', [Validators.required, Validators.minLength(6)]]
      });
      this.registerMForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
      
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  get g() { return this.registerMForm.controls; }

  onSubmitUser() {
      // this.userservice.getCustomer(this.email).subscribe(users=>this.userObj = users);
    // if(this.password==)
      // stop here if form is invalid
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }
      else {
      
        this.userservice.getUserCred(this.registerForm.get('email').value).subscribe(data => {
          this.admin = data;
          if(this.admin ==null){
            alert("Invalid credentials 1");
          } 
          else if(this.admin.email == this.registerForm.get('email').value && this.admin.password==this.registerForm.get('password').value) {
            alert("valid");
            this.router.navigateByUrl('/userinfopage');
          }
          else {
            console.log(this.admin.email);
            alert("Invalid Credentials 2");
          }
        }) 
      }
}

onSubmitMentor() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerMForm.invalid) {
        return;
    }
    else {
      console.log(this.registerMForm.get('email').value);
      this.mentorservice.getMentorCred(this.registerMForm.get('email').value).subscribe(data => {
        this.admin = data;
        console.log(this.admin.email);
        console.log(this.admin.password);
        if(this.admin ==null){
          alert("Invalid credentials 1");
        } 
        else if(this.admin.email == this.registerMForm.get('email').value && this.admin.password==this.registerMForm.get('password').value) {
          alert("valid");
          this.router.navigate(['/mentorinprogress']);
        }
        else {
          // console.log(this.admin.email);
          alert("Invalid Credentials 2");
        }
      }) 
    }
}

}
