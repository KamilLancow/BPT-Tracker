import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-energy-bar-item',
  templateUrl: './energy-bar-item.component.html',
  styleUrls: ['./energy-bar-item.component.css']
})
export class EnergyBarItemComponent implements OnInit {

  @Input() value!: number;
  @Output() selected:EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.selected.emit(this.value);
  }
}
