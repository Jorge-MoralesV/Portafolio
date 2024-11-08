import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-superior',
  templateUrl: './superior.component.html',
  styleUrls: ['./superior.component.css'],
  animations: [
    trigger('enterTitle', [
      state('void', style({
        transform: 'translateX(-50px)',
        opacity: 0
      })),
      transition(':enter', [
        animate(700, style({
          transform: 'translateX(0)',
          transition: 'opacity ease-in',
          opacity: 1
        }))
      ])
    ]),
    trigger('enterImg', [
      state('void', style({
        transform: 'translateX(50px)',
        opacity: 0
      })),
      transition(':enter', [
        animate(700, style({
          transform: 'translateX(0)',
          transition: 'opacity ease-in',
          opacity: 1
        }))
      ])
    ]),
  ]
})
export class SuperiorComponent {
  constructor(@Inject(DOCUMENT) private document: Document) { }

  goProyects(sectionId: string) {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  public name: string = `Soy Jorge`;
  public title: string = `Desarrollador Web 💻`;
  public area: string = `FrontEnd 🎨`

}
