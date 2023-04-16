import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './producto.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'producto',
        component: ProductoComponent,
      },
      { path: '**', redirectTo: 'producto' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoRoutingModule {}
