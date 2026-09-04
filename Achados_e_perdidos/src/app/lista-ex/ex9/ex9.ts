import { Component } from '@angular/core';

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {
  nomeProduto = 'Monitor Gamer';
  estoque = 5;

  adicionar() {
    this.estoque++;
  }

  remover() {
    if (this.estoque > 0) {
      this.estoque--;
    }
}
}
