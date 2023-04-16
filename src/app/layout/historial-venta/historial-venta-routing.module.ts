import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialVentaComponent } from './historial-venta.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'historialventa',
        component: HistorialVentaComponent,
      },
      { path: '**', redirectTo: 'historialventa' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialVentaRoutingModule {}
