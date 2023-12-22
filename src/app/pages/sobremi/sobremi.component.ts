import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})

export class SobremiComponent {

  public description: String = `Mi nombre es Jorge Morales Viveros, recien egresado de la carrera de ingeniería de
  sistemas computacionales, me especializo en las áreas de Frontend y Backend. Al trabajar en equipo
  tengo iniciativa y proactividad, lo que me permite analizar y crear soluciones favoreciendo el
  avance de los proyectos aportando mis ideas en momentos oportunos o decisivos.`;

  public back: String = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore beatae neque, fugiat cupiditate
  dolorem repellat eos at doloribus et placeat. Architecto rerum autem reiciendis reprehenderit iure
  provident numquam odit facere!`;

  constructor(private renderer: Renderer2) {
  }

}
