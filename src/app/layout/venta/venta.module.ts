import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { VentaComponent } from './venta.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [VentaComponent],
  imports: [CommonModule, VentaRoutingModule, MaterialModule],
  exports: [VentaComponent],
})
export class VentaModule {}
