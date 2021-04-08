import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BPT } from 'src/app/models/bpt';
import { BPTService } from 'src/app/services/bpt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  BPT!: BPT[];

  constructor(private service:BPTService, private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    // this.service.getDayBPT().subscribe(BPT => {
    //   this.BPT = BPT;
    //   console.log('homecomponent executed');
    // }, (error) => console.log(error));
    this.service.BPT_ofDay.subscribe(value => {
      this.BPT = value;
      console.log('homecomponent updated', this.BPT);
      this.ref.detectChanges();
    }, (error) => console.log(error));
  }

}
