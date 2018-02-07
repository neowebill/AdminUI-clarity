import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardwareComponent } from './hardware.component';
import {HardwareRoutingModule} from './hardware-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HardwareRoutingModule
  ],
  declarations: [HardwareComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HardwareModule { }
