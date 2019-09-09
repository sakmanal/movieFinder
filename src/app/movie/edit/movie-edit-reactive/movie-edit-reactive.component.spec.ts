import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditReactiveComponent } from './movie-edit-reactive.component';

describe('MovieEditReactiveComponent', () => {
  let component: MovieEditReactiveComponent;
  let fixture: ComponentFixture<MovieEditReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEditReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
