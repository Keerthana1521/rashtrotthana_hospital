import { Component,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router,
    private renderer: Renderer2) { }

  openLink(type: string) {
    if (type == 'youtube') {
      window.open('https://www.youtube.com/', '_blank');
    }
    else if (type == 'facebook') {
      window.open('https://www.facebook.com/', '_blank');
    }
    else if (type == 'twitter') {
      window.open('https://twitter.com/', '_blank');
    }
    else if (type == 'instagram') {
      window.open('https://www.instagram.com/', '_blank');
    }
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }
  closeMenu() {
    const navbarCollapse = document.getElementById('navbarText');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      this.renderer.removeClass(navbarCollapse, 'show');
    }
  }
}
