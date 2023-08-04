import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user';
import { UsuarioService } from '../shared/service/userService';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {

  constructor( private _servicio:UsuarioService ){}

  users:User[] = [];

  ngOnInit(): void {
  
    this._servicio.getUsers().subscribe(data => this.users = data.data);

  }

}
