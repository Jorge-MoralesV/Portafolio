import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/proyectos.enviroment';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {

  escire: any[] = [];
  proyectos: any[] = [];
  index: number;
  proyectoActual: any;

  constructor(private _proyectos: Proyectos, private _proyectosEscire: Proyectos) { }

  ngOnInit(): void {
    this.proyectos = this._proyectos.getProyects();
  }

  isElementInView(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const elements = document.querySelectorAll('.proyecto');
    elements.forEach((element, index) => {
      if (this.isElementInView(element as HTMLElement)) {
        if (index % 2 === 0) {
          element.classList.add('slide-in-left');
        } else {
          element.classList.add('slide-in-right');
        }
      }
    });
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
