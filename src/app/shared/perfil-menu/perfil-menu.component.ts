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
      subtitulo: 'Perfil Principal',
    },
    {
      nombre: 'Swageer',
      foto: 'https://i.pravatar.cc/100?u=swageer',
      subtitulo: 'Creador de contenido',
    },
    {
      nombre: 'Swagestilo',
      foto: 'https://i.pravatar.cc/100?u=swagestilo',
      subtitulo: 'Página',
    },
  ];

  opciones = [
    { icono: 'fa-gear', texto: 'Configuración y privacidad' },
    { icono: 'fa-circle-question', texto: 'Ayuda y soporte técnico' },
    { icono: 'fa-moon', texto: 'Pantalla y accesibilidad' },
    { icono: 'fa-message', texto: 'Enviar comentarios' },
    { icono: 'fa-right-from-bracket', texto: 'Cerrar sesión' },
  ];

  handleOpcion(texto: string) {
    console.log('Opción seleccionada:', texto);

    // Manejar diferentes opciones
    switch (texto) {
      case 'Cerrar sesión':
        this.cerrarSesion();
        break;
      case 'Configuración y privacidad':
        // Navegar a configuración
        break;
      case 'Pantalla y accesibilidad':
        // Abrir menú de accesibilidad
        break;
      default:
        // Otras acciones
        break;
    }
  }

  cerrarSesion() {
    // Lógica de cerrar sesión
    console.log('Cerrando sesión...');
    this.close.emit();
    // Aquí puedes agregar tu lógica de logout
  }

  cerrar() {
    this.close.emit();
  }
}
