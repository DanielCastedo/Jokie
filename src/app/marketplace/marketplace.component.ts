import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: string;
  ubicacion: string;
  imagen: string;
  etiqueta?: string;
}

@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
})
export class MarketplaceComponent {
  productos: Producto[] = [];

  constructor() {
    this.generarProductosAleatorios(20);
  }

  generarProductosAleatorios(cantidad: number) {
    const nombres = [
      'Moto Estrella 150cc',
      'Teclado mecánico + Mouse',
      'Laptop ASUS TUF Gaming',
      'Smartphone Samsung A54',
      'Bicicleta Montañera',
      'Auriculares Bluetooth JBL',
      'Silla Gamer Reclinable',
      'Cámara Canon EOS 2000D',
      'Smart TV 43” LG UHD',
      'Tablet Lenovo 10"',
      'Zapatillas Nike Air',
      'Mesa de Computadora',
      'Monitor Curvo Samsung',
      'Moto Haojin 2022',
      'Micrófono Condensador',
      'Mouse Inalámbrico Logitech',
      'PlayStation 5',
      'Dron DJI Mini 2',
      'Cocina Mabe 4 Hornallas',
      'Heladera Samsung No Frost',
    ];

    const ubicacion = 'Santa Cruz de la Sierra, S';
    const etiquetas = ['Recién publicado', 'En oferta', 'Popular', 'Nuevo', 'Exclusivo'];

    for (let i = 0; i < cantidad; i++) {
      const id = i + 1;
      const nombre = this.getRandomElement(nombres);
      const descripcion = this.generarDescripcion(nombre);
      const precio = this.getRandomPrice();
      const imagen = `https://picsum.photos/id/${this.getRandomNumber(1, 1000)}/400/300`;
      const etiqueta = Math.random() < 0.25 ? this.getRandomElement(etiquetas) : undefined;

      this.productos.push({
        id,
        nombre,
        descripcion,
        precio,
        ubicacion,
        imagen,
        etiqueta,
      });
    }
  }

  generarDescripcion(nombre: string): string {
    const frases = [
      'En excelente estado, único dueño.',
      'Funciona perfectamente, poco uso.',
      'Con todos sus accesorios originales.',
      'Entrega inmediata, trato directo.',
      'Ideal para regalo o uso personal.',
      'Muy cuidado, como nuevo.',
      'Listo para usar, sin fallas.',
      'Solo interesados reales.',
      'Incluye garantía por 3 meses.',
      'Producto original, sin detalles.',
    ];
    return `${nombre}. ${this.getRandomElement(frases)}`;
  }

  getRandomPrice(): string {
    const precios = [
      `Bs.${this.getRandomNumber(50, 1500)}`,
      `Bs.${this.getRandomNumber(2000, 12000)}`,
      'GRATIS',
    ];
    return this.getRandomElement(precios);
  }

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
