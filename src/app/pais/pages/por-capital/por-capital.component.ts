import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = [];


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

    this.paisService.buscarCapital(this.termino)
    .subscribe((paises)=>{
      console.log(paises)
      this.paises = paises;
    }, (err)=>{
      //console.log('Error');
      //console.log(err);
      this.hayError = true;
      this.paises = [];
    });
  }

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
