import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPersonEntryComponent } from './index-person-entry.component';

describe('IndexPersonEntryComponent', () => {
  let component: IndexPersonEntryComponent;
  let fixture: ComponentFixture<IndexPersonEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPersonEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPersonEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
