import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarLanding3 } from './webinar-landing-3';

describe('WebinarLanding3', () => {
  let component: WebinarLanding3;
  let fixture: ComponentFixture<WebinarLanding3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarLanding3],
    }).compileComponents();

    fixture = TestBed.createComponent(WebinarLanding3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
