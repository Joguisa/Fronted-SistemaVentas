import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { DialogUsuarioComponent } from './dialogs/dialog-usuario/dialog-usuario.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

@NgModule({
  declarations: [UsuarioComponent, DialogUsuarioComponent],
  imports: [CommonModule, UsuarioRoutingModule, MaterialModule],
  exports: [UsuarioComponent],
})
export class UsuarioModule {}
