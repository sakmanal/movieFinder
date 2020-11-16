import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSelectComponent } from './movie-select.component';

describe('MovieListComponent', () => {
  let component: MovieSelectComponent;
  let fixture: ComponentFixture<MovieSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
