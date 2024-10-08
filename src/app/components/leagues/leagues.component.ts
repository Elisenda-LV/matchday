import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LeaguesService } from '../../services/leagues.service';
import { League } from '../../models/league.interface';
import { AddLeagueButtonComponent } from './add-league-button/add-league-button.component';
import { SearchLeaguesComponent } from './search-leagues/search-leagues.component';
import { FilterLeaguesComponent } from './filter-leagues/filter-leagues.component';



@Component({
  selector: 'app-leagues',
  standalone: true,
  imports: [CommonModule, AddLeagueButtonComponent, SearchLeaguesComponent, FilterLeaguesComponent],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.scss'
})
export class LeaguesComponent implements OnInit {

  leaguesService = inject(LeaguesService);
  router = inject(Router);

  leagues: League[] = [];

  ngOnInit(): void {}

  //To show league manager


}
