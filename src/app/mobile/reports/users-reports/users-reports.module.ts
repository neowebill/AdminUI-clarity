import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersReportsRoutingModule } from './users-reports-routing.module';
import { UsersReportsComponent } from './users-reports.component';

@NgModule({
  imports: [
    CommonModule,
    UsersReportsRoutingModule
  ],
  declarations: [UsersReportsComponent]
})
export class UsersReportsModule { }
