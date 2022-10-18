import { Component, OnInit } from '@angular/core';
import { ColegiosService } from '../services/colegios.service';


@Component({
  selector: 'app-colegios',
  templateUrl: './colegios.component.html',
  styleUrls: ['./colegios.component.css']
})
export class ColegiosComponent implements OnInit {


  colegios: string[] = [];

  constructor(private colegiosService: ColegiosService) {}
  
  
  ngOnInit(): void {
    this.cargarColegios();
  }


   agregarColegio() {
     this.colegiosService.agregarColegio();
     this.cargarColegios();
   }


   borrarColegio() {
    this.colegiosService.borraColegio();
    this.cargarColegios();
   }

  //  mostrarAlerta() {
  //   return this.colegios.length === 0;
  //  }

  cargarColegios() {
    this.colegios = this.colegiosService.getColegios();
  }


}
