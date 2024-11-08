import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, Renderer2, ViewChild } from '@angular/core';
import { Proyectos } from 'src/app/proyectos.enviroment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  scrollVisible = false;

  constructor(private renderer: Renderer2, @Inject(DOCUMENT) private document: Document) { }

  scrollToSection(sectionId: string) {
    const element = this.document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onscroll(): void {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollVisible = scrollPosition > 100;
  }

}
