import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './auth/pages/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./layout/dash-board/dash-board.module').then(
            (m) => m.DashBoardModule
          ),
      },
      {
        path: 'historialventa',
        loadChildren: () =>
          import('./layout/historial-venta/historial-venta.module').then(
            (m) => m.HistorialVentaModule
          ),
      },
      {
        path: 'producto',
        loadChildren: () =>
          import('./layout/producto/producto.module').then(
            (m) => m.ProductoModule
          ),
      },
      {
        path: 'reporte',
        loadChildren: () =>
          import('./layout/reporte/reporte.module').then(
            (m) => m.ReporteModule
          ),
      },
      {
        path: 'usuario',
        loadChildren: () =>
          import('./layout/usuario/usuario.module').then(
            (m) => m.UsuarioModule
          ),
      },
      {
        path: 'venta',
        loadChildren: () =>
          import('./layout/venta/venta.module').then((m) => m.VentaModule),
      },
    ],
  },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
