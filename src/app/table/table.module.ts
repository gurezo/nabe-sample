import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TableRoutingModule } from './table-routing.module';

import { TableComponent } from './table.component';

// 仕事の実装では、serviceに書くコード
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    HttpClientModule, // 仕事の実装では、serviceに書くコード
    SharedModule,
    TableRoutingModule
  ]
})
export class TableModule {}
