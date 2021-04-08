import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { BPT } from '../models/bpt';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BPTService {

  private serverUrl: string = 'http://localhost:3000';

  public day: string = new Date().toISOString().substr(0,10);
  public BPT_ofDay: BehaviorSubject<BPT[]> = new BehaviorSubject<BPT[]>([]);

  constructor(private http:HttpClient) {console.log('hello service'); }
  
  Init(): any {
    return new Promise<void>((resolve) => {
      console.log("Service.init() called");
      this.getSelectedDayBPT();
      setTimeout(() => {
          console.log('Service.init() Finished');
          resolve();
      }, 50);
    });
  }

  // http get request that returns array of objects of type BPT. the data returned is saved in variable bpt of the Service Class
  getSelectedDayBPT() {
    this.http.get<BPT[]>(`${this.serverUrl}/bpt_of_day/`+ this.day/*'2021-03-19'*/, httpOptions)
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
          return bpt;
        });
      })
    ).subscribe(
      res =>{
        console.log("Parsed", res);
        this.BPT_ofDay.next(res);
    }, err => console.log(err) );
  }

  // returns an observable, to use from other components to get the data 
  getDayBPT(): Observable<BPT[]> {
    console.log('today is' , this.day);

    return this.http.get<BPT[]>(`${this.serverUrl}/bpt_of_day/`+ /*this._day*/'2021-03-19', httpOptions)
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

}
