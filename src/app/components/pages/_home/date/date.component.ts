import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  day:string = 'date here';
  currentDate:Date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
