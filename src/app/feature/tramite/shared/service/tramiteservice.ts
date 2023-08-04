import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tramite } from '../model/tramite';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  url = 'http://localhost:8080/api/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Tramite[]>{
    return this.httpClient.get<Tramite[]>(this.url + 'tramite');
  }

  public save(tramite: Tramite): Observable<any>{
    return this.httpClient.post<any>(this.url + 'tramite', tramite);
  }

}