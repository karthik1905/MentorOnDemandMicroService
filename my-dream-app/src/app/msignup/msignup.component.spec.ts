import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSignupComponent } from './msignup.component';

describe('MSignupComponent', () => {
  let component: MSignupComponent;
  let fixture: ComponentFixture<MSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
