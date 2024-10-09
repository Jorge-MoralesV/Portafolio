import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-formulario',
  templateUrl: './mensaje-formulario.component.html',
  styleUrls: ['./mensaje-formulario.component.css']
})
export class MensajeFormularioComponent implements OnInit {

  @Input() textoMensaje: string = 'Correo enviado';
  @Input() isSuccess: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
