import { Component } from '@angular/core';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css'],
})

export class SobremiComponent {

  tools = false;

  lenguajes = [
    'Java', 'JavaScript', 'TypeScript', 'PHP', 'HTML', 'CSS', 'TailwindCSS', 'Bootstrap', 'JQuery', 'SASS'
  ]

  herramientas = [
    'AdobeXD', 'Angular', 'Canva', 'Figma', 'Laravel', 'MySQL', 'OJS', 'SQLite', 'SQLServer', 'React', 'Firebase'
  ]

  constructor() { }

  ngOnInit() {
    this.tools = false;
  }

  public description: String = `Mi nombre es Jorge Morales Viveros, egresado de la carrera de ingeniería de
  sistemas computacionales, me especializo en las áreas de Frontend y Backend. Al trabajar en equipo
  tengo iniciativa y proactividad, lo que me permite analizar y crear soluciones favoreciendo el
  avance de los proyectos aportando mis ideas en momentos oportunos o decisivos.
  Apasionado por el desarrollo de aplicaciones y el mantenimiento y soporte de hardware. Egresado con sólidos conocimientos en programación, diseño de sistemas y resolución de problemas técnicos. Comprometido con la innovación y la mejora continua en el ámbito tecnológico.`;

  cambio(change: boolean) {
    this.tools = change;
    return this.tools;
  }

  goCv() {
    window.open('https://drive.google.com/file/d/1NNMMTDnngxNzKtz5jLOhD5xTb63Bk5GI/view?usp=sharing', '_blank');
  }

}
