import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './menu/menu.module#MenuModule'
  },
  {
    path: 'hoge',
    loadChildren: './hoge/hoge.module#HogeModule'
  },
  {
    path: 'bar',
    loadChildren: './bar/bar.module#BarModule'
  },
  {
    path: 'table',
    loadChildren: './table/table.module#TableModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
