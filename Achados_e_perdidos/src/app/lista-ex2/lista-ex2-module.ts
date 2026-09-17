import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEx2RoutingModule } from './lista-ex2-routing-module';
import { Campotexto } from './campotexto/campotexto';
import { Ex1 } from './ex1/ex1';

@NgModule({
  declarations: [Campotexto, Ex1],
  imports: [CommonModule, ListaEx2RoutingModule],
})
export class ListaEx2Module {}
