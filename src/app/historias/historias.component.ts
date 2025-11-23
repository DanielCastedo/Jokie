import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Historia {
  nombre: string;
  imagen: string;
  fotoPerfil: string;
  activa: boolean;
}

@Component({
  selector: 'app-historias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef<HTMLDivElement>;

  historias: Historia[] = [
    { nombre: 'Crear historia', imagen: 'https://i.pravatar.cc/300?u=crear', fotoPerfil: 'https://i.pravatar.cc/100?u=yo', activa: false },
    { nombre: 'Mileidy Cuajera', imagen: 'https://i.pravatar.cc/300?u=mileidy', fotoPerfil: 'https://i.pravatar.cc/100?u=mileidy2', activa: true },
    { nombre: 'Julio Fernandez', imagen: 'https://i.pravatar.cc/300?u=julio', fotoPerfil: 'https://i.pravatar.cc/100?u=julio2', activa: true },
    { nombre: 'Nicole Rueda', imagen: 'https://i.pravatar.cc/300?u=nicole', fotoPerfil: 'https://i.pravatar.cc/100?u=nicole2', activa: false },
    { nombre: 'Leidy CJ', imagen: 'https://i.pravatar.cc/300?u=leidy', fotoPerfil: 'https://i.pravatar.cc/100?u=leidy2', activa: true },
    { nombre: 'Liz Arleth Mendez', imagen: 'https://i.pravatar.cc/300?u=lizarleth1', fotoPerfil: 'https://i.pravatar.cc/100?u=lizarleth2', activa: false },
    { nombre: 'Fernanda Ruiz', imagen: 'https://i.pravatar.cc/300?u=fer', fotoPerfil: 'https://i.pravatar.cc/100?u=fer2', activa: true },
    { nombre: 'Carlos Vaca', imagen: 'https://i.pravatar.cc/300?u=carlos', fotoPerfil: 'https://i.pravatar.cc/100?u=carlos2', activa: false },
  ];

  scroll(direction: 'left' | 'right') {
    const container = this.scrollContainer.nativeElement;
    const scrollAmount = 300; // distancia del desplazamiento
    if (direction === 'left') container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    else container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
