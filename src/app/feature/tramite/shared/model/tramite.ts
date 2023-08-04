export class Tramite {
    //id: string =""; 
    radicado: string;
    ano: any;
    nombre: string;
    descripcion: string;
    solicitante: any;
    funcionario: any;


    constructor(radicado: string, ano: any, nombre: string, descripcion: string, solicitante: any, funcionario:any){
        this.radicado = radicado;
        this.ano = ano;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.solicitante = solicitante;
        this.funcionario = funcionario;
    }
}