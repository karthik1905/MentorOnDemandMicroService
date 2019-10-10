import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrls: ['./userhomepage.component.css']
})
export class UserhomepageComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor() {  
  }

  ngOnInit() {
  }

}
