import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-energy-item',
  templateUrl: './energy-item.component.html',
  styleUrls: ['./energy-item.component.css']
})
export class EnergyItemComponent implements OnInit {

  @Input() hour!: string;
  @Output() selected = new EventEmitter<number>();
  subscription: Subscription;
  bool_circle: boolean = false;

  constructor() {
    this.subscription = interval(60000).subscribe(val => this.setCurrentHour());
  }

  ngOnInit(): void {
    this.setCurrentHour();
  }

  setCurrentHour() {
    if (new Date().getHours() == Number(this.hour.length == 4 ? this.hour.substr(0,1) : this.hour.substr(0,2)))
      this.bool_circle = true;
      else this.bool_circle = false;
  }

  toggleCircle() {
    let classes = {
      'circle': this.bool_circle
    }

    return classes;
  }
  
  onClick() {
    this.selected.emit(Number(this.hour.length == 4 ? this.hour.substr(0,1) : this.hour.substr(0,2)));
  }

}
