import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { League } from './../models/league.interface';
import { Observable } from 'rxjs';


const API_URL = environment.endpoint;

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  public leagues: League[] = [];

  constructor(private httpClient: HttpClient) { }

  getListLeagues(): Observable<League[]>{
    return this.httpClient.get<League[]>(`${API_URL}leagues`)
  }

  getLeagueById(id: string): Observable<League>{
    return this.httpClient.get<League>(`${API_URL}leagues/${id}`)
  }

  createLeague(league: League): Observable<League>{
    return this.httpClient.post<League>(`${API_URL}leagues`, league)
  }

  updateLeague(league: League): Observable<League>{
    return this.httpClient.put<League>(`${API_URL}leagues/${league.id_league}`, league)
  }




}
