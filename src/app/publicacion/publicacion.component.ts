import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoriasComponent } from '../historias/historias.component';

interface Post {
  usuario: string;
  verificado: boolean;
  fecha: string;
  texto: string;
  imagen: string;
  titulo?: string;
  likes: number;
  comentarios: number;
  compartidos: number;
}


@Component({
  selector: 'app-publicacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent {
  publicaciones: Post[] = [];
  publicaciones2: Post[] = [];

  constructor() {
    // 🔹 Generar 20 publicaciones aleatorias
    for (let i = 0; i < 1; i++) {
      this.publicaciones.push(this.generarPublicacion());
    }
    for (let i = 0; i < 20; i++) {
      this.publicaciones2.push(this.generarPublicacion());
    }
  }

  generarPublicacion(): Post {
    const nombres = [
      'Daniel Castedo', 'Mileidy Cuajera', 'Julio Cesar Suarez',
      'Nicole Rueda', 'Leidy CJ', 'Liz Arleth Mendez',
      'Sergio Lopez', 'Andrea Gutierrez', 'Carlos Fernández',
      'Luciana Torres', 'Juan Pérez', 'Camila Vargas',
      'Alejandro Rios', 'Valentina Ortega', 'Pablo Martínez',
      'Sofia Morales', 'David Quiroga', 'Ana Laura Pérez',
      'Ricardo Soto', 'Gabriela Castro'
    ];

    const textos = [
      'Un día increíble para salir a pasear 🚶‍♂️🌞',
      'Trabajando en mi nuevo proyecto 💻🔥',
      'Me encanta este paisaje 😍🌄',
      'Un cafecito para empezar el día ☕️',
      'Día de entrenamiento 💪🏋️‍♂️',
      'Disfrutando con amigos 😎🍻',
      'Recuerdos de un gran viaje ✈️',
      'Nuevo look, nuevo yo 💇‍♀️',
      '¡Listo para nuevos retos! 🚀',
      'La vida se trata de momentos simples 💫'
    ];

    return {
      usuario: this.getRandomElement(nombres),
      verificado: Math.random() < 0.4, // 40% usuarios verificados
      fecha: `${this.getRandomNumber(1, 59)} min atrás`,
      texto: this.getRandomElement(textos),
      imagen: this.getRandomImage(),
      likes: this.getRandomNumber(100, 10000),
      comentarios: 20,
      compartidos: this.getRandomNumber(1, 500)
    };
  }

  // 🔹 Genera una imagen aleatoria
  getRandomImage(): string {
    const randomId = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/800/450?random=${randomId}`;
  }

  // 🔹 Genera un número aleatorio entre min y max
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // 🔹 Devuelve un elemento aleatorio de un arreglo
  getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
