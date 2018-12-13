import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { TableRoutingModule } from './table-routing.module';
import { DataTablesModule } from 'angular-datatables';

import { TableComponent } from './table.component';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, DataTablesModule, SharedModule, TableRoutingModule]
})
export class TableModule {}
