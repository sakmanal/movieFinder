import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditInfoComponent } from './movie-edit-info.component';

describe('MovieEditInfoComponent', () => {
  let component: MovieEditInfoComponent;
  let fixture: ComponentFixture<MovieEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
