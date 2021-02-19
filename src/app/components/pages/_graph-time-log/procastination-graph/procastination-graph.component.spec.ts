import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcastinationGraphComponent } from './procastination-graph.component';

describe('ProcastinationGraphComponent', () => {
  let component: ProcastinationGraphComponent;
  let fixture: ComponentFixture<ProcastinationGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcastinationGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcastinationGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
