import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { League } from '../../../models/league.interface';
import { LeaguesService } from '../../../services/leagues.service';

@Component({
  selector: 'app-search-leagues',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-leagues.component.html',
  styleUrl: './search-leagues.component.scss'
})
export class SearchLeaguesComponent {

  @Output() searchResults = new EventEmitter<League[]>();
  public leagues: League[] = [];
  public leaguesService = inject(LeaguesService);

  searchForm = new FormGroup({
    search : new FormControl('', [Validators.required, Validators.maxLength(20),])
  })

  ngOnInit(): void {
    this.leaguesService.getListLeagues().subscribe((leagues) => {
      this.leagues = leagues;
    });
  }

  searchLeaguebyName(): void {
    if (this.searchForm.invalid) {
      this.searchResults.emit([]);
      return;
    }

    const searchLeague = this.searchForm.get('search')!.value?.toLowerCase().trim() || '';

    if (searchLeague !== '') {
      const results = this.leagues.filter(league =>
        league.league_name.toLowerCase().includes(searchLeague)
      );
      console.log(results);

      if (results.length === 0) {
        console.log('This league does not exist');
      }

      this.searchResults.emit(results);
    } else {
      this.searchResults.emit([]);
    }
  }

}
