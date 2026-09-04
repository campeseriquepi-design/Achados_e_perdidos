import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  usuario = '';
  senha = '';
  logado = false;

  fazerLogin() {
    if (this.usuario !== '' && this.senha !== '') {
      this.logado = true;
    }
  }
}
