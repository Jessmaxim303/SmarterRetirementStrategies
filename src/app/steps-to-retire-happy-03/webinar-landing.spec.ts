import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsRetireHappy03 } from './webinar-landing';

describe('WebinarLanding', () => {
  let component: StepsRetireHappy03;
  let fixture: ComponentFixture<StepsRetireHappy03>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepsRetireHappy03],
    }).compileComponents();

    fixture = TestBed.createComponent(StepsRetireHappy03);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
