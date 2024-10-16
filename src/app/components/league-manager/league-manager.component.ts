import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LeaguesService } from '../../services/leagues.service';
import { League } from '../../models/league.interface';
import { DeleteLeagueButtonComponent } from './delete-league-button/delete-league-button.component';
import { EditLeagueButtonComponent } from './edit-league-button/edit-league-button.component';
import { ManagerNavbarComponent } from './manager-navbar/manager-navbar.component';
import { LeagueCalendarComponent } from "./league-calendar/league-calendar.component";
import { LeagueInfoComponent } from './league-info/league-info.component';

@Component({
  selector: 'app-league-manager',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DeleteLeagueButtonComponent,
    EditLeagueButtonComponent,
    ManagerNavbarComponent,
    LeagueCalendarComponent,
    LeagueInfoComponent
],
  templateUrl: './league-manager.component.html',
  styleUrl: './league-manager.component.scss'
})
export class LeagueManagerComponent implements OnInit {

  route = inject(ActivatedRoute);
  leagueService = inject(LeaguesService);
  leagueId: string = '';

  leagueCard : League = {
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
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
    this.leagueId = params.get('id')!;
    if (this.leagueId) {
      this.getLeagueId(this.leagueId);
    }
    });
  }

  private getLeagueId(id: string) {
    this.leagueService.getLeagueById(id)
    .subscribe({
      next: (data: League) => {
        this.leagueCard = data;
        console.log(data)
        console.log('Data received:', data);
      },
      error: (error) => {
        console.log('Error while retrieving the league:', error)
      },

    })

  }
}

