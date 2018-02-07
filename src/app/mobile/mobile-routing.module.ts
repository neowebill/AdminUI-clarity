import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {MobileComponent} from './mobile.component';
import {AdminComponent} from '../admin/admin.component';

export const routes: Routes = [
  {
    path: '',
    component: MobileComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users',  loadChildren: './users/users.module#UsersModule' },
      { path: 'actions', loadChildren: './actions/actions.module#ActionsModule' },
      { path: 'reports', loadChildren: './reports/reports.module#ReportsModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MobileRoutingModule { }
