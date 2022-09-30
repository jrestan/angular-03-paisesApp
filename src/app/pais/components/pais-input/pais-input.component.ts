import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";
  
  debouncer: Subject<string> = new Subject();

  termino: string="";

  buscar()
  {
    this.onEnter.emit(this.termino)
  }

  teclaPresionada(event:any)
  {
    const valor = event.target.value;

    //ambos contienen lo mismo, podria no enviarse el event..
    //console.log(valor);
    //console.log(this.termino);
    
    this.debouncer.next(this.termino);

  }

  constructor() { }

  ngOnInit(): void 
  {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor=>{
      //console.log('debouncer', valor);
      this.onDebounce.emit(valor)
    });
  }

}
