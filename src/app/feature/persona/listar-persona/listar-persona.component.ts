import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../shared/service/personaservice';
import { Persona } from '../shared/model/persona';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent implements OnInit {


  personas !: Persona[];

  selectedPersonas!: Persona;

  constructor(
    private personaService: PersonaService) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(): void {
    this.personaService.list().subscribe(
      data => {
        this.personas = data;
      },
      err =>{
        console.log(err);
      }
    );
  }


}
