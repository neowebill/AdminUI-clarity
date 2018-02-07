import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SitesRoutingModule } from './sites-routing.module';
import {SitesComponent} from './sites.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    SitesRoutingModule
  ],
  declarations: [SitesComponent]
})
export class SitesModule { }
