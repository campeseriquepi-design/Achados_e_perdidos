import { Component } from '@angular/core';

interface Produto {
  id: number;
  nome: string;
  quantidade: number;
}

@Component({
  selector: 'app-ex14',
  standalone: false,
  templateUrl: './ex14.html',
  styleUrl: './ex14.scss',
})
export class Ex14 {

   produtos: Produto[] = [
    {
      id: 1,
      nome: 'Arroz',
      quantidade: 10
    },
    {
      id: 2,
      nome: 'Feijão',
      quantidade: 5
    },
    {
      id: 3,
      nome: 'Macarrão',
      quantidade: 0
    },
    {
      id: 4,
      nome: 'Óleo de Soja',
      quantidade: 3
    },
    {
      id: 5,
      nome: 'Açúcar',
      quantidade: 12
    }
  ];
}
