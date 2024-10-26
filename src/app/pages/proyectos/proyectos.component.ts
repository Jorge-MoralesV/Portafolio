import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/proyectos.enviroment';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  escire: any[] = [];
  proyectos: any[] = [];
  index: number;
  proyectoActual: any;

  constructor(private _proyectos: Proyectos, private _proyectosEscire: Proyectos) { }

  ngOnInit(): void {
    /* this.escire = this._proyectosEscire.getProyectsEscire(); */
    this.proyectos = this._proyectos.getProyects();
  }

  abrirEnlace(url: string) {
    window.open(url, '_blank');
  }

  abrirModal(tipo: string, i: number) {
    this.index = i;
    if (tipo === 'escire') {
      this.proyectoActual = this.escire[this.index];
    } else {
      this.proyectoActual = this.proyectos[this.index];
    }
  }

}
