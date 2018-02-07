import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UtilitiesComponent} from './utilities.component';

export const routes: Routes = [
  {
    path: '',
    component: UtilitiesComponent,
    children: [
      { path: '', redirectTo: 'suppliers', pathMatch: 'full'},
      { path: 'suppliers', loadChildren: './suppliers/suppliers.module#SuppliersModule' },
      { path: 'tariffs', loadChildren: './tariffs/tariffs.module#TariffsModule' }
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
export class UtilitiesRoutingModule { }
