import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent implements OnInit {

  termino: string = "Hola Mundo";

  buscar(){
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe(resp=>{
      console.log(resp)
    });
  }

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
