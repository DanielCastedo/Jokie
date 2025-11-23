import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common'; // ✅ importar esto

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  cantidad: number;
}

@Component({
  selector: 'app-productos',
  standalone: true, // ✅ marca el componente como standalone
  imports: [CommonModule, CurrencyPipe], // ✅ importa los pipes y directivas comunes
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos: Producto[] = [
    { id: 1, nombre: 'Laptop Lenovo', precio: 4200, cantidad: 5 },
    { id: 2, nombre: 'Mouse Logitech', precio: 150, cantidad: 20 },
    { id: 3, nombre: 'Teclado Mecánico', precio: 300, cantidad: 10 },
    { id: 4, nombre: 'Monitor LG 24"', precio: 1100, cantidad: 7 },
  ];

  eliminarProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
  }
}
