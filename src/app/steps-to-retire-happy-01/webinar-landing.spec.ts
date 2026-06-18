import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsRetireHappy01 } from './webinar-landing';

describe('WebinarLanding', () => {
  let component: StepsRetireHappy01;
  let fixture: ComponentFixture<StepsRetireHappy01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsRetireHappy01],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsRetireHappy01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
