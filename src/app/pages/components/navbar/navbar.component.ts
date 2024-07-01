import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  scrollVisible = false;

  @HostListener('window:scroll', [])
  onscroll(): void {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.scrollVisible = scrollPosition > 100;
  }

}
