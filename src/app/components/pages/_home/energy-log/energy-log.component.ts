import { Component, OnInit } from '@angular/core';
import { BPT } from 'src/app/models/bpt';

@Component({
  selector: 'app-energy-log',
  templateUrl: './energy-log.component.html',
  styleUrls: ['./energy-log.component.css']
})
export class EnergyLogComponent implements OnInit {

  day: Date = new Date();// TO DELETE
  energyHours!: string[];

  energyElements: BPT[] = [
    {
      day: this.day,
      hour: '1:00',
      energy: 8,
      activity: 'activity',
      is_productive: true,
      procastination_time: 15
    },
    {
      day: this.day,
      hour: '2:00',
      energy: 8,
      activity: 'activity',
      is_productive: true,
      procastination_time: 15
    },
    {
      day: this.day,
      hour: '3:00',
      energy: 8,
      activity: 'activity',
      is_productive: true,
      procastination_time: 15
    },
    {
      day: this.day,
      hour: '17:00',
      energy: 8,
      activity: 'activity',
      is_productive: true,
      procastination_time: 15
    },
    {
      day: this.day,
      hour: '18:00',
      energy: 8,
      activity: 'activity',
      is_productive: true,
      procastination_time: 15
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
    this.energyHours = this.energyElements.map(el => el.hour);
  }

  onHourSelected(hour: number) {
    document.querySelectorAll(".hours app-energy-item .element").forEach(element => {
      element.classList.remove("selected-energy-item");
    });
    document.querySelectorAll(".hours app-energy-item .element")[hour-1].classList.add("selected-energy-item");
  }

}
