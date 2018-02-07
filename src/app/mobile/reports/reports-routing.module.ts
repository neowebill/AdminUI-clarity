import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportsComponent} from './reports.component';

const routes: Routes = [
  {
    path: '',
    component: ReportsComponent,
    children: [
      { path: '', redirectTo: 'transactions', pathMatch: 'full'},
      { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsModule' },
      { path: 'users-r', loadChildren: './users-reports/users-reports.module#UsersReportsModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
