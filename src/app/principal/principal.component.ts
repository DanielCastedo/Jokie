import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  publicaciones: Post[] = [];
  publicacionesMostradas: Post[] = [];
  cantidadVisible = 8;
  mostrarBoton = true;

  busqueda: string = "";

  constructor() {
    for (let i = 0; i < 30; i++) {
      this.publicaciones.push(this.generarPublicacion());
    }

    this.publicacionesMostradas = this.publicaciones.slice(0, this.cantidadVisible);
  }

  // 🟦 CONTROLADOR DEL INPUT
  onBusquedaChange(valor: string) {
    this.busqueda = valor;

    if (!valor.trim()) {
      this.publicacionesMostradas = this.publicaciones.slice(0, this.cantidadVisible);
      this.mostrarBoton = true;
      return;
    }

    this.filtrarPublicaciones();
  }

  // 🟪 FILTRO
  filtrarPublicaciones() {
    const texto = this.busqueda.toLowerCase();

    this.publicacionesMostradas = this.publicaciones.filter(post =>
      post.titulo?.toLowerCase().includes(texto) ||
      post.texto.toLowerCase().includes(texto) ||
      post.usuario.toLowerCase().includes(texto)
    );

    this.mostrarBoton = false;
  }

  // ➕ VER MÁS
  verMas() {
    this.cantidadVisible += 8;
    this.publicacionesMostradas = this.publicaciones.slice(0, this.cantidadVisible);

    if (this.cantidadVisible >= this.publicaciones.length) {
      this.mostrarBoton = false;
    }
  }

  // 🧪 GENERAR PUBLICACIÓN FAKE
  generarPublicacion(): Post {
    const nombres = [
      'Daniel Castedo','Mileidy Cuajera','Julio Cesar Suarez',
      'Nicole Rueda','Leidy CJ','Liz Arleth Mendez',
      'Sergio Lopez','Andrea Gutierrez','Carlos Fernández',
      'Luciana Torres','Juan Pérez','Camila Vargas',
      'Alejandro Rios','Valentina Ortega','Pablo Martínez',
      'Sofia Morales','David Quiroga','Ana Laura Pérez',
      'Ricardo Soto','Gabriela Castro'
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

    const titulos = [
      'Colores que hicieron vibrar al país',
      '¡Boom! El Sabio Gana con Aceitunas',
      'Churchill y la foto enojada',
      'El billete de tren y el destino',
      'El secreto de Sócrates',
      'El Alquimista',
      'Lincoln y el soldado dormilón',
      'La Navidad que detuvo una guerra'
    ];

    return {
      usuario: this.getRandomElement(nombres),
      verificado: Math.random() < 0.4,
      fecha: 'Hace unos minutos',
      texto: this.getRandomElement(textos),
      titulo: this.getRandomElement(titulos),
      imagen: this.getRandomImage(),
      likes: this.getRandomNumber(100, 10000),
      comentarios: this.getRandomNumber(10, 500),
      compartidos: this.getRandomNumber(1, 300)
    };
  }

  getRandomImage(): string {
    return `https://picsum.photos/600/500?random=${Math.floor(Math.random() * 1000)}`;
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
