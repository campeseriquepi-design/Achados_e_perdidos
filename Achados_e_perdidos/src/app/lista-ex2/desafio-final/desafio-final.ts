import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {

  projetos = [
    {
      id: 1,
      titulo: 'Sistema de Vendas',
      equipe: 'Equipe Alpha',
      nota: 8.5,
      status: 'concluído',
      entregue: true
    },
    {
      id: 2,
      titulo: 'Aplicativo Mobile',
      equipe: 'Equipe Beta',
      nota: 5.5,
      status: 'desenvolvimento',
      entregue: false
    },
    {
      id: 3,
      titulo: 'Sistema Web',
      equipe: 'Equipe Gamma',
      nota: 7.5,
      status: 'testes',
      entregue: true
    },
    {
      id: 4,
      titulo: 'API de Produtos',
      equipe: 'Equipe Delta',
      nota: null,
      status: 'planejamento',
      entregue: false
    }
  ];

  mostrarConcluidos = true;

  alternarConcluidos() {
    this.mostrarConcluidos = !this.mostrarConcluidos;
  }

  alterarStatus(projeto: any) {

    if (projeto.status === 'planejamento') {
      projeto.status = 'desenvolvimento';

    } else if (projeto.status === 'desenvolvimento') {
      projeto.status = 'testes';

    } else if (projeto.status === 'testes') {
      projeto.status = 'concluído';

    } else {
      projeto.status = 'planejamento';
    }
  }

  quantidadeConcluidos() {
    return this.projetos.filter(
      projeto => projeto.status === 'concluído'
    ).length;
  }
}
