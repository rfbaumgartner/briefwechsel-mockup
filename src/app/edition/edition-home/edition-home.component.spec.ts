import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionHomeComponent } from './edition-home.component';

describe('EditionHomeComponent', () => {
  let component: EditionHomeComponent;
  let fixture: ComponentFixture<EditionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
