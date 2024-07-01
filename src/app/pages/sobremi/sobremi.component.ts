import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css'],
  animations: [
    trigger('enterState', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter', [
        animate(600, style({
          transition: 'opacity ease-in',
          opacity: 1
        }))
      ])
    ]),
  ]
})

export class SobremiComponent {

  tools: boolean | undefined;

  constructor() {

  }

  ngOnInit() {
    this.tools = false;
  }

  public description: String = `Mi nombre es Jorge Morales Viveros, egresado de la carrera de ingeniería de
  sistemas computacionales, me especializo en las áreas de Frontend y Backend. Al trabajar en equipo
  tengo iniciativa y proactividad, lo que me permite analizar y crear soluciones favoreciendo el
  avance de los proyectos aportando mis ideas en momentos oportunos o decisivos.`;

  public back: String = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae neque, fugiat cupiditate
  dolorem repellat eos at doloribus et placeat. Architecto rerum autem reiciendis reprehenderit iure
  provident numquam odit facere!`;

  cambio(change: boolean) {
    this.tools = change;
    return this.tools;
  }

}
