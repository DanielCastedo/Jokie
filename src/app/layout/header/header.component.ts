import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ IMPORTANTE
import { PerfilMenuComponent } from '../../shared/perfil-menu/perfil-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, PerfilMenuComponent], // ✅ Agrega RouterModule
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() sidebarToggle = new EventEmitter<void>();
  isDarkMode = false;
  mostrarMenu = false;

  constructor(private renderer: Renderer2) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode = prefersDark;
    this.setDarkMode(this.isDarkMode);
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.setDarkMode(this.isDarkMode);
  }

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuPerfil() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  private setDarkMode(enable: boolean) {
    const html = document.documentElement;
    if (enable) {
      this.renderer.addClass(html, 'dark');
    } else {
      this.renderer.removeClass(html, 'dark');
    }
  }
}
