import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPlaceEntryComponent } from './index-place-entry.component';

describe('IndexPlaceEntryComponent', () => {
  let component: IndexPlaceEntryComponent;
  let fixture: ComponentFixture<IndexPlaceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPlaceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPlaceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
