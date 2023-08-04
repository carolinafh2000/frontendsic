export class Empleado {
    //id: string =""; 
    identificacion: string;
    nombre: string;
    apellido: string;
    dependencia: string;
    ingreso: string;


    constructor(identificacion: string, nombre: string, apellido: string, dependencia: string, ingreso:string){
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.dependencia = dependencia;
        this.ingreso = ingreso;
    }
}