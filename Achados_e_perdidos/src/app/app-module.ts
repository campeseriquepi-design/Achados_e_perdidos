import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { FormsModule } from '@angular/forms';
import { Ex1 } from './lista-ex/ex1/ex1';
import { Ex2 } from './lista-ex/ex2/ex2';
import { Ex3 } from './lista-ex/ex3/ex3';
import { Ex4 } from './lista-ex/ex4/ex4';
import { Ex5 } from './lista-ex/ex5/ex5';
import { Ex6 } from './lista-ex/ex6/ex6';
import { Ex7 } from './lista-ex/ex7/ex7';


@NgModule({
  declarations: [App, Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
