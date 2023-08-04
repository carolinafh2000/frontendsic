import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  url = 'http://localhost:8080/api/'

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(this.url + 'empleado');
  }

  public save(empleado: Empleado): Observable<any>{
    return this.httpClient.post<any>(this.url + 'empleado', empleado);
  }

}