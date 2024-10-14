import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LeaguesService } from '../../../services/leagues.service';
import { League } from '../../../models/league.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-league-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './league-info.component.html',
  styleUrl: './league-info.component.scss'
})
export class LeagueInfoComponent implements OnInit {

  leagueId: string | null = null;

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

  constructor(private route: ActivatedRoute, private leagueService: LeaguesService) {}

  ngOnInit(): void {
    this.route.parent?.paramMap.subscribe(params => {
      this.leagueId = params.get('id');
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
        console.error('There was an error!', error);
      }
    });
  }





}


