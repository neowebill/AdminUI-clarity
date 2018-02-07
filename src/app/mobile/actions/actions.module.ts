import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionsRoutingModule } from './actions-routing.module';
import { ActionsComponent } from './actions.component';

@NgModule({
  imports: [
    CommonModule,
    ActionsRoutingModule
  ],
  declarations: [ActionsComponent]
})
export class ActionsModule { }
