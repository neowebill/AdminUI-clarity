import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClustersComponent } from './clusters.component';
import { ClustersRoutingModule } from './clusters-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClustersRoutingModule
  ],
  declarations: [ClustersComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ClustersModule { }
