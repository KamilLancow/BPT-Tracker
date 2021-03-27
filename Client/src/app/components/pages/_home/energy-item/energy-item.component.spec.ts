import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyItemComponent } from './energy-item.component';

describe('EnergyItemComponent', () => {
  let component: EnergyItemComponent;
  let fixture: ComponentFixture<EnergyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
