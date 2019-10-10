import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfopageComponent } from './userinfopage.component';

describe('UserinfopageComponent', () => {
  let component: UserinfopageComponent;
  let fixture: ComponentFixture<UserinfopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinfopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
