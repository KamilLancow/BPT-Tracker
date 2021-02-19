import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTimeLogComponent } from './graph-time-log.component';

describe('GraphTimeLogComponent', () => {
  let component: GraphTimeLogComponent;
  let fixture: ComponentFixture<GraphTimeLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphTimeLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphTimeLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
