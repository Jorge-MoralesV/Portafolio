import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  contactForm: FormGroup;
  mensaje: string;
  success: boolean = false;
  showMessage = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      reply_to: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {

      const formData = {
        from_name: this.contactForm.get('from_name')?.value,
        reply_to: this.contactForm.get('reply_to')?.value,
        message: this.contactForm.get('message')?.value
      };

      emailjs.send('service_jlxxw3v', 'template_7chbdkj', formData, 'U9_gq195Luqca0cWT')
        .then((result: EmailJSResponseStatus) => {

          this.mensaje = 'Mensaje enviado';
          this.success = true;
          this.showMessage = true;
          this.contactForm.reset();
          setTimeout(() => {
            this.showMessage = false
          }, 3000);

        }, (error) => {

          this.mensaje = 'Error al enviar el mensaje: ' + error.text;
          this.success = false;
          this.showMessage = true;
          setTimeout(() => {
            this.showMessage = false
          }, 3000);
        });
    } else {

      this.mensaje = 'Mensaje no enviado.';
      this.success = false;
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false
      }, 3000);
    }
  }
}
