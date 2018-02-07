import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntitiesRoutingModule } from './entities-routing.module';
import {EntitiesComponent} from './entities.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    EntitiesRoutingModule
  ],
  declarations: [EntitiesComponent]
})
export class EntitiesModule { }
