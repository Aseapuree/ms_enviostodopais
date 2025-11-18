import { Routes } from '@angular/router';
import { StorageService } from './services/storage.service';
import { AuthGuard } from './services/auth/auth.guard';

// ✅ Guard reutilizable
//const isLoggedIn = () => !!new StorageService().getItem('user');

export const routes: Routes = [
  // Páginas públicas
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'ubicanos',
    loadComponent: () =>
      import('./components/locate-us/locate-us.component').then(m => m.LocateUsComponent),
  },
  {
    path: 'cotizador',
    loadComponent: () =>
      import('./components/cotizador/cotizador.component').then(m => m.CotizadorComponent),
  },
  {
    path: 'noticias',
    loadComponent: () =>
      import('./components/noticias/noticias.component').then(m => m.NoticiasComponent),
  },
  {
    path: 'contactanos',
    loadComponent: () =>
      import('./components/contact-us/contact-us.component').then(m => m.ContactUsComponent),
  },

  // Páginas protegidas
  {
    path: 'crear-envio',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./components/envios/crear-envio/crear-envio.component').then(m => m.CrearEnvioComponent),
  },
  {
    path: 'lista-envios',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./components/shipment-list/shipment-list.component').then(m => m.ShipmentListComponent),
  },
  {
    path: 'mis-envios',
    canActivate: [AuthGuard],
    loadComponent: () =>
      import('./components/shipment-list/shipment-list.component').then(m => m.ShipmentListComponent),
  },

  // Fallback
  { path: '**', redirectTo: '' },
];
