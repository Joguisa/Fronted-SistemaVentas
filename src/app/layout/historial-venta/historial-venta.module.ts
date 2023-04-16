import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistorialVentaRoutingModule } from './historial-venta-routing.module';
import { HistorialVentaComponent } from './historial-venta.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DialogDetalleVentaComponent } from './dialogs/dialog-detalle-venta/dialog-detalle-venta.component';

@NgModule({
  declarations: [HistorialVentaComponent, DialogDetalleVentaComponent],
  imports: [CommonModule, HistorialVentaRoutingModule, MaterialModule],
  exports: [HistorialVentaComponent],
})
export class HistorialVentaModule {}
