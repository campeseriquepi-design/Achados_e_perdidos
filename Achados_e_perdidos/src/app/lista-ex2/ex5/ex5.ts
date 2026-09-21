import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5',
  standalone: false,
  templateUrl: './ex5.html',
  styleUrl: './ex5.scss',
})
export class Ex5 {
  mostarnomes = true;

    nomes = [
    { id:1 , nome: 'João', idade: 25 },
    { id:2 , nome: 'Maria', idade: 30 },
    { id:3 , nome: 'Pedro', idade: 20 },
    { id:4 , nome: 'Ana', idade: 28 },
    { id: 5, nome: 'Carlos', idade: 22 }
  ];
}
