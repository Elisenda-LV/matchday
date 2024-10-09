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


}
