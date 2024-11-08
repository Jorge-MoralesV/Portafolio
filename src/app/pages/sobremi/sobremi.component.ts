import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css'],
})

export class SobremiComponent {

  tools = false;

  lenguajes = [
    'Angular',
    'Bootstrap',
    'CSS',
    'Firebase',
    'HTML',
    'Java',
    'JavaScript',
    'JQuery',
    'Laravel',
    'MySQL',
    'PHP',
    'React',
    'SASS',
    'SQLite',
    'SQLServer',
    'TailwindCSS',
    'TypeScript',
  ]

  herramientas = [
    'AdobeXD', 'Canva', 'Figma', 'Git', 'GitHub', 'OJS'
  ]

  constructor() { }

  ngOnInit() {
    this.tools = false;
  }

  public descripcion: String = `Apasionado por el diseño y desarrollo de aplicaciones web y móviles que permitan crear experiencias de usuario atractivas y funcionales usando tecnologías como Angular o React.
Siempre busco aprender y adaptarme a las últimas tendencias en desarrollo, con un compromiso constante hacia la mejora continua y la innovación en cada proyecto que emprendo.`;

  cambio(change: boolean) {
    this.tools = change;
    return this.tools;
  }

  goCv() {
    window.open('https://drive.google.com/file/d/1NNMMTDnngxNzKtz5jLOhD5xTb63Bk5GI/view?usp=sharing', '_blank');
  }

}
