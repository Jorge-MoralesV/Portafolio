import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

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
        opacity: 0
      })),
      transition(':enter', [
        animate(800, style({
          transition: 'opacity ease-in',
          opacity: 1
        }))
      ])
    ]),
  ]
})
export class SuperiorComponent {

  public name: string = `Soy Jorge`;
  public title: string = `Desarrollador Web`;
  public area: string = `FrontEnd 👨‍💻`

}
