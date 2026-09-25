import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  standalone: false,
  templateUrl: './filho.html',
  styleUrl: './filho.scss',
})
export class Filho {
  @Input()
  topo: string = "Loja Angular 2" 
}
