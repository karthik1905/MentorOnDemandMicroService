import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorcompletedpageComponent } from './mentorcompletedpage.component';

describe('MentorcompletedpageComponent', () => {
  let component: MentorcompletedpageComponent;
  let fixture: ComponentFixture<MentorcompletedpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorcompletedpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorcompletedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
