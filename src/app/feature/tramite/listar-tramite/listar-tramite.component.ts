import { Component, OnInit } from '@angular/core';
import { TramiteService } from '../shared/service/tramiteservice';
import { Tramite } from '../shared/model/tramite';

@Component({
  selector: 'app-listar-tramite',
  templateUrl: './listar-tramite.component.html',
  styleUrls: ['./listar-tramite.component.css']
})
export class ListarTramiteComponent implements OnInit {

  tramites !: Tramite[];

  selectedTramites!: Tramite;

  constructor(
    private tramiteService: TramiteService) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(): void {
    this.tramiteService.list().subscribe(
      data => {
        this.tramites = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
