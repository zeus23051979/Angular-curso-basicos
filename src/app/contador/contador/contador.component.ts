import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>

        <h3>La base es:<strong> {{base}} </strong></h3>

        <button (click)="acumular(-1)"> -1 </button>
        <span> {{ numero }} </span>
        <button (click)="acumular(+1);"> +1 </button>

        <button (click)="acumularCinco()"> +{{base}} </button>
        <span> {{ numeroVDos }} </span>
        <button (click)="disminuirCinco();"> -{{base}} </button>

    `
})

export class ContadorComponent{

    titulo: string = 'Contador App';
    numero: number = 10;
    numeroVDos : number =5
    base: number = 5;
  
    acumular(valor: number){
      this.numero+= valor;
    }
  
    acumularCinco(){
      this.numeroVDos = this.numeroVDos+this.base;
    }
  
    disminuirCinco(){
      this.numeroVDos = this.numeroVDos-this.base;
    }
  
    sumar(){
      this.numero += 1;
    }
  
    restar(){
      this.numero -=1;
    }



}

