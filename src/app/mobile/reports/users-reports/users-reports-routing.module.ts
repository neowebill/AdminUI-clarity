import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersReportsComponent} from './users-reports.component';

const routes: Routes = [
  {path: '', component: UsersReportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersReportsRoutingModule { }
