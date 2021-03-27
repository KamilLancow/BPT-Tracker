import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphEnergyLogComponent } from './graph-energy-log.component';

describe('GraphEnergyLogComponent', () => {
  let component: GraphEnergyLogComponent;
  let fixture: ComponentFixture<GraphEnergyLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphEnergyLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphEnergyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
