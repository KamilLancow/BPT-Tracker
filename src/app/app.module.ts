import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { FormsModule } from "@angular/forms";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";

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
    EnergyItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
