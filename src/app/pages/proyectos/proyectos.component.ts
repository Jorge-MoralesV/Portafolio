import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {

abrirEnlace(url:string) {
/* const url = "https://estudiossociologicos.colmex.mx/index.php/es"; */
window.open(url, '_blank');
}

}
