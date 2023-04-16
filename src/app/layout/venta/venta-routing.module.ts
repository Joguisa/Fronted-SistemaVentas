import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VentaComponent } from './venta.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'venta',
        component: VentaComponent,
      },
      { path: '**', redirectTo: 'venta' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaRoutingModule {}
