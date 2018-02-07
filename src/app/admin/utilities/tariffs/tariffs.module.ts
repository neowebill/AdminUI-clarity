import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TariffsRoutingModule } from './tariffs-routing.module';
import { TariffsComponent } from './tariffs.component';

@NgModule({
  imports: [
    CommonModule,
    TariffsRoutingModule
  ],
  declarations: [TariffsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TariffsModule { }
