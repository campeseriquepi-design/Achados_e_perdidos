import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6',
  standalone: false,
  templateUrl: './ex6.html',
  styleUrl: './ex6.scss',
})
export class Ex6 {
  quantidade = 0;

  incrementar() {
    this.quantidade++;
  }

  decrementar() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}
