import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BPT } from '../models/bpt';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BPTService {

  serverUrl: string = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getTodayBPT(): Observable<BPT[]> {
    return this.http.get<BPT[]>(`${this.serverUrl}/bpt_today`)
    .pipe(map((response: any): BPT[] => {
        return response.map((r: any): BPT => {
          let bpt = <BPT>{
            day: new Date(r.day),
            hour: String(r.hour).substr(0,5).charAt(0) == '0'? String(r.hour).substr(1,4) : String(r.hour).substr(0,5),
            energy: r.energy,
            activity: r.activity,
            is_productive: r.is_productive,
            procastination_time: r.procastination_time
          }
          console.log('Parsed:', bpt);
          return bpt;
        });
      })
    );
  }

  UpdateBPT(hour: number, value: number) {
    //return this.http.put(`${this.serverUrl}/bpt_today`, hour, httpOptions);
    //this.BPT[hour-1].energy = value;
  }

  // day: Date = new Date();
  // BPT: BPT[] = [
  //   {
  //     day: this.day.getDay(),
  //     hour: '1:00',
  //     energy: 0,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '2:00',
  //     energy: 2,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '3:00',
  //     energy: 5,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '4:00',
  //     energy: 1,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '5:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '6:00',
  //     energy: 6,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '7:00',
  //     energy: 10,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '8:00',
  //     energy: 5,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '9:00',
  //     energy: 4,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '10:00',
  //     energy: 1,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '11:00',
  //     energy: 9,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '12:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '13:00',
  //     energy: 5,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '14:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '15:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '16:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '17:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '18:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '19:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   },
  //   {
  //     day: this.day.getDay(),
  //     hour: '20:00',
  //     energy: 8,
  //     activity: 'activity',
  //     is_productive: true,
  //     procastination_time: 15
  //   }
  // ];

}
