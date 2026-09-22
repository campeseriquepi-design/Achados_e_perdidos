import { Component } from '@angular/core';

interface tarefa {
  id: number;
  titulo: string;
  responsavel: string;
  prioridade: string;
  concluida: boolean;
}

@Component({
  selector: 'app-ex13',
  standalone: false,
  templateUrl: './ex13.html',
  styleUrl: './ex13.scss',
})
export class Ex13 {

   tarefas: tarefa[] = [
    { id: 1, titulo: 'Estudar Angular', responsavel: 'João', prioridade: 'Alta', concluida: false },
    { id: 2, titulo: 'Fazer compras', responsavel: 'Maria', prioridade: 'Média', concluida: true },
    { id: 3, titulo: 'Limpar a casa', responsavel: 'Pedro', prioridade: 'Baixa', concluida: false },
    { id: 4, titulo: 'Ler um livro', responsavel: 'Ana', prioridade: 'Média', concluida: true },
    { id: 5, titulo: 'Praticar esportes', responsavel: 'Carlos', prioridade: 'Alta', concluida: false },
    { id: 6, titulo: 'Assistir a um filme', responsavel: 'Mariana', prioridade: 'Baixa', concluida: false }
  ];

    alternarSituacao(tarefa: tarefa) {
    tarefa.concluida = !tarefa.concluida;
  }
}
