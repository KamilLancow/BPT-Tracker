import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyBarItemComponent } from './energy-bar-item.component';

describe('EnergyBarItemComponent', () => {
  let component: EnergyBarItemComponent;
  let fixture: ComponentFixture<EnergyBarItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyBarItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyBarItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
