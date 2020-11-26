import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentageCircleRatingComponent } from './percentage-circle-rating.component';

describe('PercentageCircleRatingComponent', () => {
  let component: PercentageCircleRatingComponent;
  let fixture: ComponentFixture<PercentageCircleRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentageCircleRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentageCircleRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
