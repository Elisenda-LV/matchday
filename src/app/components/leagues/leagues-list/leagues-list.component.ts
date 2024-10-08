import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { League } from '../../../models/league.interface';

@Component({
  selector: 'app-leagues-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leagues-list.component.html',
  styleUrl: './leagues-list.component.scss'
})
export class LeaguesListComponent {

  @Input() leagues: League[] = [];



}
