import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BPTGraphComponent } from './bptgraph.component';

describe('BPTGraphComponent', () => {
  let component: BPTGraphComponent;
  let fixture: ComponentFixture<BPTGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BPTGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BPTGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
