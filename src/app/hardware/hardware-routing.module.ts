import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HardwareComponent} from './hardware.component';

export const routes: Routes = [
  {
    path: '',
    component: HardwareComponent,
    children: [
      { path: '', redirectTo: 'hw-manufacturers', pathMatch: 'full' },
      { path: 'hw-sims', loadChildren: './sims/sims.module#SimsModule' },
      { path: 'hw-devices', loadChildren: './devices/devices.module#DevicesModule' },
      { path: 'hw-manufacturers', loadChildren: './manufacturers/manufacturers.module#ManufacturersModule' }
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
export class HardwareRoutingModule { }
