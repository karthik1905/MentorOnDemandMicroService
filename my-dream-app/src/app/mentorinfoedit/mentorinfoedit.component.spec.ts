import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorinfoeditComponent } from './mentorinfoedit.component';

describe('MentorinfoeditComponent', () => {
  let component: MentorinfoeditComponent;
  let fixture: ComponentFixture<MentorinfoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorinfoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorinfoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
