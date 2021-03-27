import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/_home/home/home.component';
import { GraphTimeLogComponent } from './components/pages/_graph-time-log/graph-time-log/graph-time-log.component';
import { GraphEnergyLogComponent } from './components/pages/_graph-energy-log/graph-energy-log/graph-energy-log.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'time-graph', component: GraphTimeLogComponent },
  { path: 'energy-graph', component: GraphEnergyLogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
