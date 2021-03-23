import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/_home/home/home.component';
import { DateComponent } from './components/date/date.component';
import { EnergyLogComponent } from './components/pages/_home/energy-log/energy-log.component';
import { TimeLogComponent } from './components/pages/_home/time-log/time-log.component';
import { GraphTimeLogComponent } from './components/pages/_graph-time-log/graph-time-log/graph-time-log.component';
import { ProcastinationGraphComponent } from './components/pages/_graph-time-log/procastination-graph/procastination-graph.component';
import { ProductivityGraphComponent } from './components/pages/_graph-time-log/productivity-graph/productivity-graph.component';
import { GraphEnergyLogComponent } from './components/pages/_graph-energy-log/graph-energy-log/graph-energy-log.component';
import { BPTGraphComponent } from './components/pages/_graph-energy-log/bptgraph/bptgraph.component';
import { BPTTableComponent } from './components/pages/_graph-energy-log/bpttable/bpttable.component';
import { EnergyItemComponent } from './components/pages/_home/energy-item/energy-item.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { DateAdapter, MatNativeDateModule } from "@angular/material/core";
import { CustomDateAdapter } from './components/date/custom-date-adapter';
import {MatIconModule} from '@angular/material/icon';
import { EnergyBarItemComponent } from './components/pages/_home/energy-bar-item/energy-bar-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DateComponent,
    EnergyLogComponent,
    TimeLogComponent,
    GraphTimeLogComponent,
    ProcastinationGraphComponent,
    ProductivityGraphComponent,
    GraphEnergyLogComponent,
    BPTGraphComponent,
    BPTTableComponent,
    EnergyItemComponent,
    EnergyBarItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: DateAdapter, useClass: CustomDateAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
