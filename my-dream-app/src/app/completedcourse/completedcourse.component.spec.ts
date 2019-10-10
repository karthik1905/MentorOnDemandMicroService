import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedcourseComponent } from './completedcourse.component';

describe('CompletedcourseComponent', () => {
  let component: CompletedcourseComponent;
  let fixture: ComponentFixture<CompletedcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
