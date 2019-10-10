import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercoursenavbarComponent } from './usercoursenavbar.component';

describe('UsercoursenavbarComponent', () => {
  let component: UsercoursenavbarComponent;
  let fixture: ComponentFixture<UsercoursenavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercoursenavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercoursenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
