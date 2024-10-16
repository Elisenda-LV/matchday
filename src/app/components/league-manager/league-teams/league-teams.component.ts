import { Component, inject } from '@angular/core';
import { LeagueTeams } from '../../../models/league-teams.interface';
import { LeaguesService } from '../../../services/leagues.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-league-teams',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './league-teams.component.html',
  styleUrl: './league-teams.component.scss'
})
export class LeagueTeamsComponent {

  leagueTeams: LeagueTeams[] = [];
  leagueService = inject(LeaguesService);
  route = inject(ActivatedRoute);

  leagueId: string | null = null;

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.leagueId = params.get('id');
      console.log(this.leagueId);
      if (this.leagueId) {
        this.getLeagueTeams(this.leagueId);
      }
    });
  }

  getLeagueTeams(id: string) {
    this.leagueService.getTeamsByLeague(id)
    .subscribe((data: LeagueTeams[]) => {
      this.leagueTeams = data;
      console.log(this.leagueTeams);
    });
  }


}
