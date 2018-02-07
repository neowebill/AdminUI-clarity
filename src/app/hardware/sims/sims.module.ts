import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimsRoutingModule } from './sims-routing.module';
import { SimsComponent } from './sims.component';
import { SimsListComponent } from './sims-list/sims-list.component';
import { SimEditComponent } from './sim-edit/sim-edit.component';
import { SimsHomeComponent } from './sims-home/sims-home.component';

@NgModule({
  imports: [
    CommonModule,
    SimsRoutingModule
  ],
  declarations: [SimsComponent, SimsListComponent, SimEditComponent, SimsHomeComponent]
})
export class SimsModule { }
