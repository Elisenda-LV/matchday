import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-navbar',
  standalone: true,
  imports: [],
  templateUrl: './manager-navbar.component.html',
  styleUrl: './manager-navbar.component.scss'
})
export class ManagerNavbarComponent {

  public router = inject(Router);

  showCalendar(id: string) {
    this.router.navigate(['leagues', id, 'calendar'])
  }

}
