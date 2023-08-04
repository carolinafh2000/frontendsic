export class Persona {
    //id: string =""; 
    tipoidentificacion: any;
    identificacion: string;
    nombre: string;
    apellido: string;
    telefono: string;
    direccion: string;
    email: string;


    constructor(tipoidentificacion: any, identificacion: string, nombre: string, apellido: string, telefono: string, direccion:string, email:string){
        this.tipoidentificacion = tipoidentificacion;
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.direccion = direccion;
        this.email = email;
    }
}