import { Component } from '@angular/core';
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

  public leagues: League[] = [];
  public foundLeague: League | null = null;

  searchForm = new FormGroup({
    search : new FormControl('', [Validators.required, Validators.maxLength(20),])
  })

  searchLeaguebyName() {
    let searchLeague = this.searchForm.get('search')!.value?.toLowerCase() || '';

    if (searchLeague.trim() !== '') {
      this.foundLeague = this.leagues.find(league =>
        league.league_name.toLowerCase().includes(searchLeague)
      )?? null;

      if (!this.foundLeague) {
        console.log('This league not exist')
      }
    } else {
      this.foundLeague = null;
    }
  }

}
