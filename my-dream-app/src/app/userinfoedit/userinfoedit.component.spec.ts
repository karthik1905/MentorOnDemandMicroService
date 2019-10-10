import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoeditComponent } from './userinfoedit.component';

describe('UserinfoeditComponent', () => {
  let component: UserinfoeditComponent;
  let fixture: ComponentFixture<UserinfoeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfoeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
