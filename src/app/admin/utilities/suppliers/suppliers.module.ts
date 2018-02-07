import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliersRoutingModule } from './suppliers-routing.module';
import { SuppliersComponent } from './suppliers.component';

@NgModule({
  imports: [
    CommonModule,
    SuppliersRoutingModule
  ],
  declarations: [SuppliersComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuppliersModule { }
