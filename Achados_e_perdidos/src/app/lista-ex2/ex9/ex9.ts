import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-ex9',
  standalone: false,
  templateUrl: './ex9.html',
  styleUrl: './ex9.scss',
})
export class Ex9 {

  produtos: Produto[] = [
    { id: 1, nome: 'Arroz', preco: 5.99, quantidade: 0 },
    { id: 2, nome: 'Feijão', preco: 7.49, quantidade: 5 },
    { id: 3, nome: 'Macarrão', preco: 3.99, quantidade: 8 },
    { id: 4, nome: 'Óleo de Soja', preco: 4.29, quantidade: 3 },
    { id: 5, nome: 'Açúcar', preco: 2.99, quantidade: 12 }
  ];
}
