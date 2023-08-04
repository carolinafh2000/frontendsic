import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../shared/service/empleadoservice';
import { Router } from '@angular/router';
import { Empleado } from '../shared/model/empleado';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  identificacion = '';
  nombre = '';
  apellido ='';
  dependencia = '';
  ingreso = '';

  constructor(
    private empleadoService: EmpleadoService, 
    private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{

    const empleado = new Empleado(this.identificacion, this.nombre, this.apellido, this.dependencia, this.ingreso);    
    this.empleadoService.save(empleado).subscribe(
      data =>{
        var message:string = data;
        console.log(data);
        console.log(message);

        //this.toastr.success(data.message , 'OK', {
        //  timeOut: 3000, positionClass: 'toast-top-center',
        //});
        this.router.navigate(['/listarEmpleados']);
      },
      err =>{
        this.toastr.error(err.error.mensaje, 'Fail', 
        {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/crearEmpleados']);
      }
    );
  }

}
