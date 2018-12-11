import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { BarComponent } from './bar.component';
import { BarRoutingModule } from './bar-routing.module';

@NgModule({
  declarations: [BarComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    SharedModule,
    BarRoutingModule
  ]
})
export class BarModule {}
