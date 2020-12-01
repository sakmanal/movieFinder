import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncSearchComponent } from './async-search.component';

describe('AsyncSearchComponent', () => {
  let component: AsyncSearchComponent;
  let fixture: ComponentFixture<AsyncSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
