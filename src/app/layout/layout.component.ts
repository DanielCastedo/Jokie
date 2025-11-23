import { Component, Renderer2 } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, SidebarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  // 👉 INICIA OCULTO — se mostrará solo al presionar el botón del Header
  sidebarVisible: boolean = false;

  // 👉 Alternar visibilidad desde el Header
  constructor(private renderer: Renderer2) {}

  toggleSidebar(): void {
    this.sidebarVisible = !this.sidebarVisible;
    this.updateBodyOverflow();
  }

  // 👉 Cerrar con el botón X dentro del sidebar
  closeSidebar(): void {
    this.sidebarVisible = false;
    this.updateBodyOverflow();
  }

  private updateBodyOverflow(): void {
    if (this.sidebarVisible) {
      this.renderer.addClass(document.body, 'overflow-hidden');
    } else {
      this.renderer.removeClass(document.body, 'overflow-hidden');
    }
  }
}
