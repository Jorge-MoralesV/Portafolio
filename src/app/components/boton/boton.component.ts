import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent {

  @Input() textoBtn: string = '';
  @Input() type: string = 'button';

}
