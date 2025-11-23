import { Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { PrincipalComponent } from './principal/principal.component';


export const routes: Routes = [
  { path: '', redirectTo: 'publicacion', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent },
  { path: 'categoria', component: CategoriaComponent },
  { path: 'publicacion', component: PublicacionComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'memecómics', component: PrincipalComponent },
];
