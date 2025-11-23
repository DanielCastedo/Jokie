import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil-menu.component.html',
})
export class PerfilMenuComponent {
  @Output() close = new EventEmitter<void>();

  perfiles = [
    {
      nombre: 'Pablo Daniel Castedo Suárez',
      foto: 'https://i.pravatar.cc/100?u=perfil1',
      subtitulo: null,
    },
    {
      nombre: 'Swageer',
      foto: 'https://i.pravatar.cc/100?u=swageer',
      subtitulo: null,
    },
    {
      nombre: 'Swagestilo',
      foto: 'https://i.pravatar.cc/100?u=swagestilo',
      subtitulo: null,
    },
  ];

  opciones = [
    { icono: 'fa-gear', texto: 'Configuración y privacidad' },
    { icono: 'fa-circle-question', texto: 'Ayuda y soporte técnico' },
    { icono: 'fa-moon', texto: 'Pantalla y accesibilidad' },
    { icono: 'fa-message', texto: 'Enviar comentarios' },
    { icono: 'fa-right-from-bracket', texto: 'Cerrar sesión' },
  ];

  cerrar() {
    this.close.emit();
  }
}
