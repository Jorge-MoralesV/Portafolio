import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { SobremiComponent } from './pages/sobremi/sobremi.component';
import { SuperiorComponent } from './pages/superior/superior.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedesComponent } from './components/redes/redes.component';
import { Proyectos } from './proyectos.enviroment';
import { BotonComponent } from './components/boton/boton.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensajeFormularioComponent } from './components/mensaje-formulario/mensaje-formulario.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ProyectosComponent,
    SobremiComponent,
    SuperiorComponent,
    FooterComponent,
    RedesComponent,
    BotonComponent,
    CarruselComponent,
    ExperienciaComponent,
    MensajeFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Proyectos],
  bootstrap: [AppComponent]
})
export class AppModule { }
