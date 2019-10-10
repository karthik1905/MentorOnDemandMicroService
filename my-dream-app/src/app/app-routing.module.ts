import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserhomepageComponent }from './userhomepage/userhomepage.component';
import { MentorlistComponent } from './mentorlist/mentorlist.component';
import { UsercoursenavbarComponent } from './usercoursenavbar/usercoursenavbar.component';
import { InprogressComponent } from './inprogress/inprogress.component';
import { CompletedcourseComponent } from './completedcourse/completedcourse.component';
import { MentorinprogressComponent } from './mentorinprogress/mentorinprogress.component';
import { UserinfopageComponent } from './userinfopage/userinfopage.component';
import { PaymentComponent } from './payment/payment.component';
import { MentorinfoeditComponent } from './mentorinfoedit/mentorinfoedit.component';
import { UserinfoeditComponent } from './userinfoedit/userinfoedit.component'; 
import {AdminComponent } from './admin/admin.component'; 
import {BlockComponent } from './block/block.component'; 
import {EditskillComponent } from './editskill/editskill.component'; 
import { MentorsignupcompletedComponent } from './mentorsignupcompleted/mentorsignupcompleted.component';
import { MSignupComponent } from './msignup/msignup.component';

const routes: Routes = [
  { path: '', redirectTo: '/userhomepage', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'block', component: BlockComponent },
  { path: 'usersignup', component: SignupComponent },
  {path: 'mentorsignup' , component: MSignupComponent},
  { path: 'admin', component: AdminComponent },
  { path: 'userhomepage', component: UserhomepageComponent },
  { path: 'mentorlist', component: MentorlistComponent },
  { path: 'usercoursenavbar', component: UsercoursenavbarComponent },
  { path: 'inprogress', component: InprogressComponent },
  { path: 'completedcourse', component: CompletedcourseComponent },
  { path: 'mentorinprogress', component: MentorinprogressComponent },
  { path: 'userinfopage', component: UserinfopageComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'editskill', component: EditskillComponent },
  { path: 'mentorinfoedit', component: MentorinfoeditComponent },
  { path: 'userinfoedit', component: UserinfoeditComponent },
  { path: 'mentorsignupcompleted', component: MentorsignupcompletedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
