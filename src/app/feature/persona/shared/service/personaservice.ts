import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url = 'http://localhost:8080/api/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(this.url + 'persona');
  }

  public save(persona: Persona): Observable<any>{
    return this.httpClient.post<any>(this.url + 'persona', persona);
  }

}