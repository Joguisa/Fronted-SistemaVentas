import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [DashBoardComponent],
  imports: [CommonModule, DashBoardRoutingModule, MaterialModule],
  exports: [DashBoardComponent],
})
export class DashBoardModule {}
