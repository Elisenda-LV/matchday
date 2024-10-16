import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { League } from '../../../models/league.interface';

@Component({
  selector: 'app-manager-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './manager-navbar.component.html',
  styleUrl: './manager-navbar.component.scss'
})
export class ManagerNavbarComponent {

  @Input() leagueId: string = '';
  public router = inject(Router);
  public route = inject(ActivatedRoute);



}
