import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../shared/service/empleadoservice';
import { Empleado } from '../shared/model/empleado';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {

  empleados !: Empleado[];

  selectedEmpleados!: Empleado;


  constructor(
    private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  cargarLista(): void {
    this.empleadoService.list().subscribe(
      data => {
        this.empleados = data;
      },
      err =>{
        console.log(err);
      }
    );
  }

}
