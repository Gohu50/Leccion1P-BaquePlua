export class Donacion {

  nombre: string;
  apellido: string;
  valor:number =0;
  fechaEntrega:Date;






  constructor(nombre: string, apellido: string,valor:number, fechaEntrega:Date) {

      this.nombre = nombre;
      this.apellido = apellido;
      this.valor = valor;
      this.fechaEntrega= fechaEntrega;

  }
}
