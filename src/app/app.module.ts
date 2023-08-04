import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { ListarEmpleadoComponent } from './feature/empleado/listar-empleado/listar-empleado.component';
import { CrearEmpleadoComponent } from './feature/empleado/crear-empleado/crear-empleado.component';
import { CrearTramiteComponent } from './feature/tramite/crear-tramite/crear-tramite.component';
import { ListarTramiteComponent } from './feature/tramite/listar-tramite/listar-tramite.component';
import { CrearPersonaComponent } from './feature/persona/crear-persona/crear-persona.component';
import { ListarPersonaComponent } from './feature/persona/listar-persona/listar-persona.component';
import { ListarUsuarioComponent } from './feature/usuarios/listar-usuario/listar-usuario.component';

import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import { ToastrModule } from 'ngx-toastr';
import { EmpleadoService } from './feature/empleado/shared/service/empleadoservice';
import { PersonaService } from './feature/persona/shared/service/personaservice';
import { TramiteService } from './feature/tramite/shared/service/tramiteservice';
import { UsuarioService } from './feature/usuarios/shared/service/userService';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarEmpleadoComponent,
    CrearEmpleadoComponent,
    CrearTramiteComponent,
    ListarTramiteComponent,
    CrearPersonaComponent,
    ListarPersonaComponent,
    ListarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmpleadoService, PersonaService, TramiteService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
