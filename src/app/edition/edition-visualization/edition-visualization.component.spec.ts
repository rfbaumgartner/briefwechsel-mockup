import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionVisualizationComponent } from './edition-visualization.component';

describe('EditionVisualizationComponent', () => {
  let component: EditionVisualizationComponent;
  let fixture: ComponentFixture<EditionVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditionVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditionVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
