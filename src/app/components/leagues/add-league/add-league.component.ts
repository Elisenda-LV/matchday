import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { League } from '../../../models/league.interface';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LeaguesService } from '../../../services/leagues.service';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-league',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-league.component.html',
  styleUrl: './add-league.component.scss'
})
export class AddLeagueComponent {

  @Input() league: League[] = [];

  public activeModal  = inject(NgbActiveModal);
  public leagueService = inject(LeaguesService);
  public router = inject(Router);

  public leagueForm: FormGroup;

  constructor() {
    this.leagueForm = new FormGroup({
      league_name: new FormControl ('', [Validators.required, Validators.maxLength(15)]),
      sport: new FormControl ('', [Validators.required]),
      gender: new FormControl ('', [Validators.required]),
      category: new FormControl ('', [Validators.required]),
      location: new FormControl ('', [Validators.required, Validators.maxLength(15)]),
      description: new FormControl ('', [Validators.required, Validators.maxLength(140)]),

    });
  }

  addLeague(){
    if(this.leagueForm.valid){
      const formValues = this.leagueForm.value;
     const newLeague: League = {
        id_league: uuidv4(),
        league_name: formValues.league_name!,
        sport: formValues.sport!,
        user_id: '10', // Hardcoded for now
        gender: formValues.gender!,
        category: formValues.category!,
        description: formValues.description!,
        location: formValues.location!,
        create_at: new Date(),

      }

      this.leagueService.createLeague(newLeague).subscribe(
        {
          next: (createdLeague: League) => {
            this.activeModal.close(createdLeague);
            window.location.reload();
            console.log(createdLeague);
            this.router.navigate(['/league-manager', createdLeague.id_league]);

          },
          error: (err) => console.log(err)
        }
      )
    }
  }


}





