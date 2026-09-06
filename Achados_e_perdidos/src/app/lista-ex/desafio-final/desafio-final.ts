import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio-final',
  standalone: false,
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss',
})
export class DesafioFinal {
  nomeAluno: string = '';
  quantidadeDisciplinas: number = 1;
  mensagemConfirmacao: string = '';

  aumentarDisciplinas(): void {
    this.quantidadeDisciplinas++;
  }

  diminuirDisciplinas(): void {
    if (this.quantidadeDisciplinas > 1) {
      this.quantidadeDisciplinas--;
    }
  }

  realizarMatricula(): void {
    if (this.nomeAluno.trim()) {
      this.mensagemConfirmacao = `Matrícula realizada com sucesso para o(a) aluno(a) ${this.nomeAluno.trim()} em ${this.quantidadeDisciplinas} disciplina(s)!`;
    }
  }
}
