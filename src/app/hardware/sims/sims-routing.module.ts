import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SimsComponent} from './sims.component';
import {SimEditComponent} from './sim-edit/sim-edit.component';

const routes: Routes = [
  {path: '', component: SimsComponent},
  {path: ':id', component: SimEditComponent},
  {path: 'new', component: SimEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimsRoutingModule { }
