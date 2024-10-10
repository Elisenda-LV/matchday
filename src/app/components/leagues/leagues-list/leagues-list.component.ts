import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { League } from '../../../models/league.interface';
import { LeaguesService } from '../../../services/leagues.service';
import { FilterLeaguesComponent } from '../filter-leagues/filter-leagues.component';

@Component({
  selector: 'app-leagues-list',
  standalone: true,
  imports: [
    CommonModule,
    FilterLeaguesComponent,
  ],
  templateUrl: './leagues-list.component.html',
  styleUrl: './leagues-list.component.scss'
})
export class LeaguesListComponent {

  @Input() leagues: League[] = [];

  leaguesService = inject(LeaguesService);

  ngOnInit(): void {
    this.leaguesService.getListLeagues().subscribe((leagues) => {
      this.leagues = leagues;
    });
  }




}
