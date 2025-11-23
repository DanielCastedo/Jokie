import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent {
  categorias = [
    { id: 1, nombre: 'Medicamentos' },
    { id: 2, nombre: 'Vitaminas' },
    { id: 3, nombre: 'Cuidado personal' },
    { id: 4, nombre: 'Suplementos' },
  ];
}
