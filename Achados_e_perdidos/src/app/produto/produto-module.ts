import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing-module';
import { Cadastro } from './cadastro/cadastro';

@NgModule({
  declarations: [Cadastro],
  imports: [CommonModule, ProdutoRoutingModule],
})
export class ProdutoModule {}
