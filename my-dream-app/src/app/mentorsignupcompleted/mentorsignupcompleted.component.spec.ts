import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsignupcompletedComponent } from './mentorsignupcompleted.component';

describe('MentorsignupcompletedComponent', () => {
  let component: MentorsignupcompletedComponent;
  let fixture: ComponentFixture<MentorsignupcompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsignupcompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsignupcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
