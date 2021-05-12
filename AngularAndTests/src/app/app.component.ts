import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filmes: any;

  ngOnInit(): void {
    this.filmes = [
      {
        nome: 'Um Sonho de Liberdade',
        dataLancamento: new Date('12/07/1994'),
        valor: 150.00,
        tamanho: '513326980'
      },
      {
        nome: 'O Poderoso Chefão',
        dataLancamento: new Date('01/12/1972'),
        valor: 200.00,
        tamanho: '1342177280'
      },
      {
        nome: 'Batman: O Cavaleiro das Trevas ',
        dataLancamento: new Date('08/01/2008'),
        valor: 70.00,
        tamanho: '719974720'
      },
      {
        nome: 'o poderoso chefão 2',
        dataLancamento: new Date('01/12/1974'),
        valor: 120.00,
        tamanho: '1254589899'
      },
      {
        nome: 'Pulp Fiction: Tempo de Violência ',
        dataLancamento: new Date('01/08/1994'),
        valor: 190.00,
        tamanho: '773039680'
      }
    ];
  }
 
}
