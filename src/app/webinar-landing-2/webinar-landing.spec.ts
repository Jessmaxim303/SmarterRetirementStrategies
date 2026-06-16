import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinarLanding } from './webinar-landing';

describe('WebinarLanding', () => {
  let component: WebinarLanding;
  let fixture: ComponentFixture<WebinarLanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebinarLanding],
    }).compileComponents();

    fixture = TestBed.createComponent(WebinarLanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
