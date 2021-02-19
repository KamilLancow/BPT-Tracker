import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPTTableComponent } from './bpttable.component';

describe('BPTTableComponent', () => {
  let component: BPTTableComponent;
  let fixture: ComponentFixture<BPTTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPTTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPTTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
