import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { League } from '../../../models/league.interface';
import { LeaguesService } from '../../../services/leagues.service';

@Component({
  selector: 'app-filter-leagues',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-leagues.component.html',
  styleUrl: './filter-leagues.component.scss'
})
export class FilterLeaguesComponent {

  @Output() filterResults = new EventEmitter<League[]>();

  public leagues: League[] = [];
  public leaguesService = inject(LeaguesService);

  filtersForm = new FormGroup({
    gender: new FormControl(''),
    sport: new FormControl(''),
    category: new FormControl(''),
  });

  ngOnInit(): void {
    this.leaguesService.getListLeagues().subscribe((leagues) => {
      this.leagues = leagues;
    });

  }

  public applyFilters(){
    // Get the selected values from the form
    const genderFilter = this.filtersForm.get('gender')!.value;
    const sportFilter = this.filtersForm.get('sport')!.value;
    const categoryFilter = this.filtersForm.get('category')!.value;

    // Log the filter values for debugging
    console.log('Gender Filter:', genderFilter);
    console.log('Sport Filter:', sportFilter);
    console.log('Category Filter:', categoryFilter);

    // Log the original leagues data for debugging
    console.log('Original Leagues:', this.leagues);

    // Verificar si los datos de las ligas están disponibles
    if (!this.leagues || this.leagues.length === 0) {
      console.error('No leagues data available');
      return;
    }

    // Apply filters to the original data
    const results = this.leagues.filter(league => {
      return (
        (genderFilter === '' || league.gender === genderFilter) &&
        (sportFilter === '' || league.sport === sportFilter) &&
        (categoryFilter === '' || league.category === categoryFilter)
      );
    });
    this.filterResults.emit(results);
    console.log(results);
  }

  public reset(){
    window.location.reload();
  }



}
