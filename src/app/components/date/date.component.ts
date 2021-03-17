import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
  day: any;

  constructor() { }

  ngOnInit(): void {
    this.day = new Date();
  }
  
  addEvent(event: MatDatepickerInputEvent<Date>) {
    this.day = event.value;
  }
}
