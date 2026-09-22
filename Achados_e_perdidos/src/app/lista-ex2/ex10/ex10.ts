import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  promocao: boolean;
}

@Component({
  selector: 'app-ex10',
  standalone: false,
  templateUrl: './ex10.html',
  styleUrl: './ex10.scss',
})
export class Ex10 {
  produtos: Produto[] = [
    { id: 1, nome: 'Arroz', preco: 5.99, promocao: true },
    { id: 2, nome: 'Feijão', preco: 7.49, promocao: false },
    { id: 3, nome: 'Macarrão', preco: 3.99, promocao: false },
    { id: 4, nome: 'Óleo de Soja', preco: 4.29, promocao: true },
    { id: 5, nome: 'Açúcar', preco: 2.99, promocao: false },
  ];

  alternarPromocao(produto: Produto) {
    produto.promocao = !produto.promocao;
  }
}
