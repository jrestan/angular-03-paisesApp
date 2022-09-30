import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  //intento tarea video110
  /*
  hayError: boolean = false;
  get paises(): Country[]{
    return this.paisService.paises;
  }
  constructor(private paisService: PaisService) { 
  }*/

  //Esta era la solucion tarea video110
  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
