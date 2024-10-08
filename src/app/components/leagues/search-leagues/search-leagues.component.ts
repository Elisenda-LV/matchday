import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { League } from '../../../models/league.interface';

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
  public foundLeague: League | null = null;

  searchForm = new FormGroup({
    search : new FormControl('', [Validators.required, Validators.maxLength(20),])
  })

 searchLeaguebyName() {
  let searchLeague = this.searchForm.get('search')!.value?.toLowerCase() || '';

  if (searchLeague.trim() !== '') {
    const results = this.leagues.filter(league =>
      league.league_name.toLowerCase().includes(searchLeague)
    );

    if (results.length === 0) {
      console.log('This league does not exist');
    }

    this.searchResults.emit(results);
  } else {
    this.searchResults.emit([]);
  }
}

}
