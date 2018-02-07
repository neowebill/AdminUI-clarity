import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {AccountComponent} from './account.component';

export const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'entities', pathMatch: 'full'},
      { path: 'entities', loadChildren: './entities/entities.module#EntitiesModule' },
      { path: 'sites', loadChildren: './sites/sites.module#SitesModule' },
      { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' }
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
export class AccountRoutingModule { }
