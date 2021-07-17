import { Component } from '@angular/core';
import { UserFacade } from '@griin/features/user';

@Component({
  selector: 'griin-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private userFacade: UserFacade) { }

  logout() {
    this.userFacade.logout();
  }
}
