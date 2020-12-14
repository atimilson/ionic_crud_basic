import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AditProdutoPage } from './adit-produto.page';

const routes: Routes = [
  {
    path: '',
    component: AditProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AditProdutoPageRoutingModule {}
