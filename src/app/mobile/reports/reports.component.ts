import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reports',
  template: `<div class="content-container">
    <div class="content-area">
      <router-outlet></router-outlet>
    </div>
    <nav class="sidenav">
      <section class="nav-group">
        <input id="account-side" type="checkbox">
        <label for="account-side">Reports Management</label>
        <ul class="nav-list">
          <li class="nav-item"><a class="nav-link" routerLink="transactions" routerLinkActive="active">Transactions</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="users-r" routerLinkActive="active">Users Reports</a></li>
        </ul>
      </section>
    </nav>
  </div>
  `,
  styles: []
})
export class ReportsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
