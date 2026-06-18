import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsRetireHappy02 } from './webinar-landing';

describe('WebinarLanding', () => {
  let component: StepsRetireHappy02;
  let fixture: ComponentFixture<StepsRetireHappy02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsRetireHappy02],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsRetireHappy02);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
