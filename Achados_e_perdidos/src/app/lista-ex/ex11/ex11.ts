import { Component } from '@angular/core';

@Component({
  selector: 'app-ex11',
  standalone: false,
  templateUrl: './ex11.html',
  styleUrl: './ex11.scss',
})
export class Ex11 {
  produto = {
    nome: 'Mouse Gamer',
    preco: 120.00
  };

  quantidade: number = 1;
  mensagemCarrinho: string = '';

  get total(): number {
    return this.quantidade * this.produto.preco;
  }

  aumentarQuantidade(): void {
    this.quantidade++;
  }

  diminuirQuantidade(): void {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho(): void {
    this.mensagemCarrinho = `${this.quantidade}x "${this.produto.nome}" adicionado(s) ao carrinho com sucesso!`;
  }
}
