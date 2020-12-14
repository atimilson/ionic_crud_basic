import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AditProdutoPageRoutingModule } from './adit-produto-routing.module';

import { AditProdutoPage } from './adit-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AditProdutoPageRoutingModule
  ],
  declarations: [AditProdutoPage]
})
export class AditProdutoPageModule {}
