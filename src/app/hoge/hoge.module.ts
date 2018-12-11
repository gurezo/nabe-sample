import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HogeComponent } from './hoge.component';
import { HogeRoutingModule } from './hoge-routing.module';

@NgModule({
  declarations: [HogeComponent],
  imports: [CommonModule, SharedModule, HogeRoutingModule]
})
export class HogeModule {}
