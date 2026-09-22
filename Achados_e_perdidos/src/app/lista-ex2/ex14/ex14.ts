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
  // Convertido do Exercício 3 - Verificação de idade
  idade = 0;

  aumentarIdade() {
    this.idade++;
  }

  diminuirIdade() {
    if (this.idade > 0) {
      this.idade--;
    }
  }

  // Convertido do Exercício 6 - Tratamento de lista vazia
  listaInicial = ['João', 'Maria', 'Pedro'];
  nomes = [...this.listaInicial];

  limparNomes() {
    this.nomes = [];
  }

  restaurarNomes() {
    this.nomes = [...this.listaInicial];
  }

  // Convertido do Exercício 9 - Classificação dos produtos
  produtos: Produto[] = [
    { id: 1, nome: 'Arroz', quantidade: 0 },
    { id: 2, nome: 'Feijão', quantidade: 3 },
    { id: 3, nome: 'Macarrão', quantidade: 8 },
  ];
}
