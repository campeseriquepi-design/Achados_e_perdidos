import { Component } from '@angular/core';

interface Produto {
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex12',
  standalone: false,
  templateUrl: './ex12.html',
  styleUrl: './ex12.scss',
})
export class Ex12 {

  nome: string = '';
  quantidade: number = 0;

  produtos: Produto[] = [];

  mensagem: string = '';

  cadastrarProduto() {

    if (this.nome.trim() === '') {
      this.mensagem = 'Preencha o nome do produto.';
      return;
    }

    if (this.quantidade < 0) {
      this.mensagem = 'A quantidade deve ser igual ou maior que zero.';
      return;
    }

    this.produtos.push({
      nome: this.nome,
      quantidade: this.quantidade
    });

    this.nome = '';
    this.quantidade = 0;
    this.mensagem = '';
  }

  excluirProduto(index: number) {
    this.produtos.splice(index, 1);
  }
}
