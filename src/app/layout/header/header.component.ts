import { Component, EventEmitter, Output, Renderer2, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PerfilMenuComponent } from '../../shared/perfil-menu/perfil-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, PerfilMenuComponent],
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

  // ✅ Cerrar menú al hacer click fuera
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Solo cerrar si el click no fue dentro del contenedor del perfil
    if (!target.closest('.perfil-container')) {
      this.mostrarMenu = false;
    }
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

  closeMenu() {
    this.mostrarMenu = false;
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
