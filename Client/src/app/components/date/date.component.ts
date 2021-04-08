import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { BPTService } from 'src/app/services/bpt.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  
  day: any;

  constructor(private service:BPTService) { }

  ngOnInit(): void {
    this.day = new Date();
  }
  
  changeDate(event: MatDatepickerInputEvent<Date>) {
    // updating date
    event.value?.setTime(event.value.getTime() + (2*60*60*1000));// adding 2 hours to get the right day
    this.day = event.value?.toISOString().substr(0,10);
    console.log('date changed to', this.day );
    // changing the Service date variable and updating BPT object (this update will trigger other components wich will consequently update their obj) 
    this.service.day = this.day;
    this.service.getSelectedDayBPT();
  }
}
