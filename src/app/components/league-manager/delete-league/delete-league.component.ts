import { Component, inject } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LeaguesService } from '../../../services/leagues.service';
import { Router } from '@angular/router';
import { League } from '../../../models/league.interface';

@Component({
  selector: 'app-delete-league',
  standalone: true,
  imports: [],
  templateUrl: './delete-league.component.html',
  styleUrl: './delete-league.component.scss'
})
export class DeleteLeagueComponent {

  public activeModal  = inject(NgbActiveModal);
  public leagueService = inject(LeaguesService);
  public router = inject(Router);

  public leagueCard: League = {
    id_league: '',
    user_id:'',
    league_name: '',
    sport: '',
    gender: '',
    category: '',
    description: '',
    location: '',
    created_at: new Date(),
    updated_at: new Date(),
  };

  //método para eliminar una liga

  deleteLeague(){
    this.leagueService.deleteLeague(this.leagueCard.id_league)
    .subscribe({
      next: (data: League) => {
        console.log('League deleted:', data);
        this.activeModal.close();
        this.router.navigate(['/leagues']);
      },
      error: (error) => {
        console.log('Error while deleting the league:', error);
      }
    });
  }

}
