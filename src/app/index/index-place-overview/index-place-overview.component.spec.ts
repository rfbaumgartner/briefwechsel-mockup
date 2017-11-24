import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPlaceOverviewComponent } from './index-place-overview.component';

describe('IndexPlaceOverviewComponent', () => {
  let component: IndexPlaceOverviewComponent;
  let fixture: ComponentFixture<IndexPlaceOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPlaceOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPlaceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
