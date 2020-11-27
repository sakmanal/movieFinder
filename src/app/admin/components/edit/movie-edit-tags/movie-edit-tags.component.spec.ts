import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieEditTagsComponent } from './movie-edit-tags.component';

describe('MovieEditTagsComponent', () => {
  let component: MovieEditTagsComponent;
  let fixture: ComponentFixture<MovieEditTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEditTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
