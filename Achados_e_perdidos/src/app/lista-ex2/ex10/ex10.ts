import { Component } from '@angular/core';

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {

  promocao: boolean = true;

  produtoPromocional = {
    nome: 'Arroz',
    preco: 5.99,
    desconto: 0.2
  };

  ativarPromocao() {
    this.promocao = true;
  }

  desativarPromocao() {
    this.promocao = false;
  }
}
