import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];


  /*
  //intento tarea video110
  get hayError(){
    return this.paisService.hayError;
  }
  */

  sugerencias(termino: string)
  {
    this.hayError = false;

    //TODO: crear sugerencias
    console.log(termino)
  }
  
  buscar(termino: string)
  {
    this.hayError = false;
    this.termino = termino

    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
    .subscribe((paises)=>{
      console.log(paises)
      this.paises = paises;
    }, (err)=>{
      //console.log('Error');
      //console.log(err);
      this.hayError = true;
      this.paises = [];
    });
    
    /*
    //intento tarea video110
    this.paisService._buscarPais(this.termino);
    */
  }

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
