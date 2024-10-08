import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { League } from '../../../models/league.interface';

@Component({
  selector: 'app-filter-leagues',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter-leagues.component.html',
  styleUrl: './filter-leagues.component.scss'
})
export class FilterLeaguesComponent {

  @Output() filterResults = new EventEmitter<League[]>();
  public filteredLeagues: League[] = [];
  public leagues: League[] = [];

  filtersForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.filtersForm = new FormGroup({
      gender: new FormControl(''),
      sport: new FormControl(''),
      category: new FormControl(''),
    });
  }


  public applyFilters(){
    // Get the selected values from the form
    const genderFilter = this.filtersForm.get('gender')!.value;
    const sportFilter = this.filtersForm.get('sport')!.value;
    const categoryFilter = this.filtersForm.get('category')!.value;

    // Apply filters to the original data
    this.filteredLeagues = this.leagues.filter(league => {
      return (
        (genderFilter === '' || league.gender === genderFilter) &&
        (sportFilter === '' || league.sport === sportFilter) &&
        (categoryFilter === '' || league.category === categoryFilter)
      );
    });
    this.filterResults.emit(this.filteredLeagues);

  }


  public resetFilters(){
    window.location.reload();
  }

}
