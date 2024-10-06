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

  constructor(private _proyectos: Proyectos, private _proyectosEscire: Proyectos) { }

  ngOnInit(): void {
    this.escire = this._proyectosEscire.getItemsEscire();
    this.proyectos = this._proyectos.getItems();
  }

  abrirEnlace(url: string) {
    window.open(url, '_blank');
  }

  enviarId(i: number) {
    this.index = i;
  }

}
