import { Component } from '@angular/core';

@Component({
  selector: 'app-ex7',
  standalone: false,
  templateUrl: './ex7.html',
  styleUrl: './ex7.scss',
})
export class Ex7 {
   disciplinas = [
    { nome: 'Matemática', nota: 8 },
    { nome: 'Português', nota: 7 },
    { nome: 'História', nota: 9 },
    { nome: 'Geografia', nota: 6 },
    { nome: 'Ciências', nota: 10 },
    { nome: 'Inglês', nota: 5 }
  ];
}
