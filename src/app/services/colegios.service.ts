import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ColegiosService {

  private colegios  = ['Azarquiel', 'Europa', 'Infantes', 'Maristas'];

  constructor() {
    console.log('Servicio inicializado...');
   }

  agregarColegio() {
    this.colegios.push( `Colegio ${this.colegios.length + 1} ` );
  }

  borraColegio() {
    this.colegios.shift();
  }

  getColegios() {
    return [...this.colegios];
  }




}
