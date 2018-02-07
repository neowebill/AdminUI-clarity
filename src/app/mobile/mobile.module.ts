import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile.component';
import {MobileRoutingModule} from './mobile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MobileRoutingModule
  ],
  declarations: [MobileComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class MobileModule { }
