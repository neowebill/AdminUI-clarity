import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilitiesComponent } from './utilities.component';
import {UtilitiesRoutingModule} from './utilities-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UtilitiesRoutingModule
  ],
  declarations: [UtilitiesComponent]
})
export class UtilitiesModule { }
