import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './producto.component';
import { DialogProductoComponent } from './dialogs/dialog-producto/dialog-producto.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ProductoComponent, DialogProductoComponent],
  imports: [CommonModule, ProductoRoutingModule, MaterialModule],
  exports: [ProductoComponent],
})
export class ProductoModule {}
