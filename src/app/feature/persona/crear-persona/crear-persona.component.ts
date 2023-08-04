import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../shared/service/personaservice';
import { Router } from '@angular/router';
import { Persona } from '../shared/model/persona';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  tipoidentificacion = null;
  identificacion = '';
  nombre = '';
  apellido = '';
  telefono = '';
  direccion = '';
  email = '';

  constructor(
    private personaService: PersonaService, 
    private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{

    const persona = new Persona(this.tipoidentificacion, this.identificacion, this.nombre, this.apellido, this.telefono, this.direccion, this.email);    
    this.personaService.save(persona).subscribe(
      data =>{
        var message:string = data;

        this.router.navigate(['/listarPersonas']);
      },
      err =>{
        this.toastr.error(err.error.mensaje, 'Fail', 
        {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/crearPersonas']);
      }
    );
  }

}
