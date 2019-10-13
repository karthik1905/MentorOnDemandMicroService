import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomepageComponent } from './userhomepage/userhomepage.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { UsercoursenavbarComponent } from './usercoursenavbar/usercoursenavbar.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { CompletedcourseComponent } from './completedcourse/completedcourse.component';
import { UserinfopageComponent } from './userinfopage/userinfopage.component';
import { MentorinprogressComponent } from './mentorinprogress/mentorinprogress.component';
import { PaymentComponent } from './payment/payment.component';
import { MentorinfoeditComponent } from './mentorinfoedit/mentorinfoedit.component';
import { UserinfoeditComponent } from './userinfoedit/userinfoedit.component';
import { MentorsignupcompletedComponent } from './mentorsignupcompleted/mentorsignupcompleted.component';
import { AdminComponent } from './admin/admin.component';
import { BlockComponent } from './block/block.component';
import { EditskillComponent } from './editskill/editskill.component';
import { MSignupComponent } from './msignup/msignup.component';
import { BlockMentorComponent } from './block-mentor/block-mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    MSignupComponent,
    UserhomepageComponent,
    MentorlistComponent,
    UsercoursenavbarComponent,
    InprogressComponent,
    CompletedcourseComponent,
    UserinfopageComponent,
    MentorinprogressComponent,
    PaymentComponent,
    MentorinfoeditComponent,
    UserinfoeditComponent,
    MentorsignupcompletedComponent,
    AdminComponent,
    BlockComponent,
    EditskillComponent,
    BlockMentorComponent
  ],
  exports:
  [ ReactiveFormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatAutocompleteModule, MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
