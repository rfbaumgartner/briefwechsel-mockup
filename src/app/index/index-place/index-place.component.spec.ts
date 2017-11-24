import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPlaceComponent } from './index-place.component';

describe('IndexPlaceComponent', () => {
  let component: IndexPlaceComponent;
  let fixture: ComponentFixture<IndexPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
