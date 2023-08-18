import { Component,ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  toggleSidenav() {
    this.sidenav.toggle();
  }
}
