import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LeaguesService } from '../../services/leagues.service';
import { League } from '../../models/league.interface';
import { AddLeagueButtonComponent } from './add-league-button/add-league-button.component';
import { SearchLeaguesComponent } from './search-leagues/search-leagues.component';
import { FilterLeaguesComponent } from './filter-leagues/filter-leagues.component';
import { LeaguesListComponent } from './leagues-list/leagues-list.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-leagues',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    AddLeagueButtonComponent,
    SearchLeaguesComponent,
    FilterLeaguesComponent,
    LeaguesListComponent
  ],
  templateUrl: './leagues.component.html',
  styleUrl: './leagues.component.scss'
})
export class LeaguesComponent  {

  public leaguesService = inject(LeaguesService);
  public router = inject(Router);

  public leagues: League[] = [];

  onFilterResults(filteredLeagues: League[]) {
    this.leagues = filteredLeagues;
  }

  onSearchResults(searchResults: League[]) {
    this.leagues = searchResults;
  }



}
