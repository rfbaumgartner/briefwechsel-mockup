import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionLetterComponent } from './edition-letter.component';

describe('EditionLetterComponent', () => {
  let component: EditionLetterComponent;
  let fixture: ComponentFixture<EditionLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
