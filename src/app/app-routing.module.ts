import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';
import { InicioComponent } from './pages/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }),
  ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AppRoutingModule { }
