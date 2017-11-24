import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPersonOverviewComponent } from './index-person-overview.component';

describe('IndexPersonOverviewComponent', () => {
  let component: IndexPersonOverviewComponent;
  let fixture: ComponentFixture<IndexPersonOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPersonOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPersonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
