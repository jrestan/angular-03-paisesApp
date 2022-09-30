import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
      private activatedRoute: ActivatedRoute,
      private paisService: PaisService) 
  { 
  }

  ngOnInit(): void {
    /*
    this.activatedRoute.params.subscribe(params=>{
       console.log('Ver Param',params);
        //esto va a devolver {id:PE}
    });*/
    
    /*
    this.activatedRoute.params.subscribe(({id})=>{
      //esto va a devolver PE porque se esta desestructurando
      //Es id porque en el app-routing.module.ts se ha declarado pais/:id
      console.log(id);

      this.paisService.obtenerPaisPorAlpha(id).subscribe(pais=>{
        console.log(pais);
      });

    });*/

    this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.paisService.obtenerPaisPorAlpha(id)),
        tap( console.log )  //<=hace lo mismo que el console.log que esta en el subscribe
        //switchMap((param)=>this.paisService.obtenerPaisPorAlpha(param['id']))
      )
      .subscribe(resp=>{
        //console.log(resp);
        this.pais = resp;
    });

  }

}
