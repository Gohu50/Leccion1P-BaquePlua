import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Donacion } from 'src/app/models/Donacion';

@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.scss']
})
export class DonacionesComponent {
  listEstudiante: Donacion[] = [];
  form!: FormGroup;
  total: number =0;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaEntrega: ['', Validators.required],
      valor:['',Validators.required]
    });

  }
  agregarEstudiante():void {const donacion: Donacion = {

    nombre: this.form.value.nombre,
    apellido: this.form.value.apellido,
    fechaEntrega: this.form.value.fechaEntrega,
    valor: this.form.value.valor,

  }

  //agrego a la lista
  this.listEstudiante.push(donacion);
  //limpiar el formulario
  this.form.reset();
  this.total += donacion.valor;


  }

  sumar(total:number){
    total += this.total;
  }



  eliminarEstudiante(indice:number):void{
    //const element =this.listEstudiante.splice(indice,1)[0];
    //this.listEstudiante.splice(indice,1)[0];
    this.listEstudiante.splice(indice,1);


  }


}
