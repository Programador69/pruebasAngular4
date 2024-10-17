import { Routes } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ComunidadComponent } from './comunidad/comunidad.component';
import { ProductosComponent } from './productos/productos.component';
import { validacionUsuarioGuard } from './validacion-usuario.guard';

export const routes: Routes = [
    {path: "acerca-de", component: AcercaDeComponent},
    {path: "comunidad", component: ComunidadComponent},
    {path: "productos", component: ProductosComponent, canActivate: [validacionUsuarioGuard]}
];
