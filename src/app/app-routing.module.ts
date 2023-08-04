import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ListarEmpleadoComponent } from './feature/empleado/listar-empleado/listar-empleado.component';
import { CrearEmpleadoComponent } from './feature/empleado/crear-empleado/crear-empleado.component';
import { ListarPersonaComponent } from './feature/persona/listar-persona/listar-persona.component';
import { CrearPersonaComponent } from './feature/persona/crear-persona/crear-persona.component';
import { ListarTramiteComponent } from './feature/tramite/listar-tramite/listar-tramite.component';
import { CrearTramiteComponent } from './feature/tramite/crear-tramite/crear-tramite.component';
import { ListarUsuarioComponent } from './feature/usuarios/listar-usuario/listar-usuario.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'listarEmpleados', component: ListarEmpleadoComponent},
  { path: 'crearEmpleados', component: CrearEmpleadoComponent},
  { path: 'listarPersonas', component: ListarPersonaComponent},
  { path: 'crearPersonas', component: CrearPersonaComponent},
  { path: 'listarTramites', component: ListarTramiteComponent},
  { path: 'crearTramites', component: CrearTramiteComponent},
  { path: 'listarUsuarios', component: ListarUsuarioComponent},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
