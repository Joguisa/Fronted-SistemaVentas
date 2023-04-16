import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { LoadingComponent } from './components/loading/loading.component';

import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [HomeComponent, LoadingComponent],
  imports: [CommonModule, MaterialModule],
  exports: [HomeComponent, LoadingComponent],
})
export class SharedModule {}
