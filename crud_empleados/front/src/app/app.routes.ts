import { Routes } from '@angular/router';
import { EmpleadosComponent } from './components/empleados/empleados.component';

export const routes: Routes = [
    { path: 'empleados', component: EmpleadosComponent },
    { path: '', redirectTo: '/empleados', pathMatch: 'full' }, // Ruta por defecto
    { path: '**', redirectTo: '/empleados' } // Manejo de rutas no encontradas
];
