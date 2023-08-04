import { Component, OnInit } from '@angular/core';
import { TramiteService } from '../shared/service/tramiteservice';
import { Router } from '@angular/router';
import { Tramite } from '../shared/model/tramite';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-crear-tramite',
  templateUrl: './crear-tramite.component.html',
  styleUrls: ['./crear-tramite.component.css']
})
export class CrearTramiteComponent implements OnInit {

  radicado = '';
  ano = null;
  nombre = '';
  descripcion = '';
  solicitante = null;
  funcionario = null;

  constructor(    
    private tramiteService: TramiteService, 
    private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void{

    const tramite = new Tramite(this.radicado, this.ano, this.nombre, this.descripcion, this.solicitante, this.funcionario);    
    this.tramiteService.save(tramite).subscribe(
      data =>{

        this.router.navigate(['/listarTramites']);
      },
      err =>{
        this.toastr.error(err.error.mensaje, 'Fail', 
        {
          timeOut: 3000, positionClass: 'toast-top-center',
        });
        this.router.navigate(['/crearTramites']);
      }
    );
  }

}
