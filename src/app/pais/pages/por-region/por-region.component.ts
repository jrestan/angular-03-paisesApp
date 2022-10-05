import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    button {
      margin-right: 15px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ["africa", "americas", "asia", "europe", "oceania"];

  regionActiva: string = "";

  paises: Country[] = [];

  inibusqueda : boolean = false;

  getClassCSS(region: string): string{
    return (region===this.regionActiva)?"btn btn-primary":"btn btn-outline-primary";
  }

  activarRegion(region: string)
  {
    if(this.regionActiva===region){return;}
    
    this.regionActiva = region;
    this.inibusqueda = true;

    //TODO: hacer el llamado al servicio para traer los paises por esa region

    this.paisService.buscarPorRegion(region)
    .subscribe((paises)=>{
      //console.log(paises)
      this.paises = paises;
      this.inibusqueda = false;
    }, (err)=>{
      //console.log('Error');
      //console.log(err);
      this.paises = [];
      this.inibusqueda = false;
    });
  }

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
