import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import {AccountsComponent} from './accounts.component';
import {ClarityModule} from '@clr/angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    AccountsRoutingModule
  ],
  declarations: [AccountsComponent]
})
export class AccountsModule { }
