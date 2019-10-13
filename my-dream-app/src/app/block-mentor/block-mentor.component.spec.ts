import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockMentorComponent } from './block-mentor.component';

describe('BlockMentorComponent', () => {
  let component: BlockMentorComponent;
  let fixture: ComponentFixture<BlockMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
