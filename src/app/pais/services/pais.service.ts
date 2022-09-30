import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from "rxjs";
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  /*
  //intento tarea video110
  private _paises: Country[] = [];
  private _hayError: boolean = false;
  */

  private apiUrl: string = "https://restcountries.com/v2";
  
  /*
  //intento tarea video110
  get paises(){
    return [...this._paises];
  }
  get hayError(){
    return this._hayError;
  }
  */

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> 
  {
    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
      /*.pipe( //Esta es una forma de hacer un catch de error en caso la url no devuelva nada
        catchError(err=>of(['Error no encontrado']))
      );*/

  }

  /*
  //intento tarea video110
  _buscarPais(termino: string)
  {
    const url = `${this.apiUrl}/name/${termino}`;
    
    this.http.get<Country[]>(url).subscribe((paises)=>{
      console.log(paises)
      this._paises = paises;
      this._hayError = false;
    }, (err)=>{
      console.log('Error');
      console.log(err);
      this._paises = [];
      this._hayError = true;
    });
  }
  */

  buscarCapital(termino: string): Observable<Country[]> 
  {
    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
      /*.pipe( //Esta es una forma de hacer un catch de error en caso la url no devuelva nada
        catchError(err=>of(['Error no encontrado']))
      );*/

  }

  obtenerPaisPorAlpha(id: string): Observable<Country> 
  {
    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

}
