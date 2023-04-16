import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteComponent } from './reporte.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [ReporteComponent],
  imports: [CommonModule, ReporteRoutingModule, MaterialModule],
  exports: [ReporteComponent],
})
export class ReporteModule {}
