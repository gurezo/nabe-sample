import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

import { BarComponent } from './bar.component';
import { BarRoutingModule } from './bar-routing.module';

@NgModule({
  declarations: [BarComponent],
  imports: [CommonModule, SharedModule, BarRoutingModule]
})
export class BarModule {}
