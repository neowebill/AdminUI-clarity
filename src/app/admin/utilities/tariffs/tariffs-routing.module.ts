import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TariffsComponent} from './tariffs.component';

const routes: Routes = [
  {path: '', component: TariffsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TariffsRoutingModule { }
