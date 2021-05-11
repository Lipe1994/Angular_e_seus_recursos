import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1><p>Olhe o console ==></p>`,
})
export class AppComponent implements OnInit{

  title = 'PromisesEObservables';

  /*
    EXEMPLO DE PROMISE
  */
  promise (nome: string ): Promise<String>{
    return new Promise<String>((resolve, reject)=>{
      if(nome === "Filipe"){
          resolve('Olá '+nome);
      }else{
        reject('Ocorreu um erro.');
      }
    })
  }; 

  /*
    EXEMPLO DE OBSERVABLE
  */
  observable(nome :string): Observable<String>{
    return new Observable<String>( subscriber =>{
      if(nome === 'Filipe'){
          subscriber.next('Olá '+nome);
          subscriber.next('proximo retorno ');
          setTimeout(()=>subscriber.next('mais um retorno '), 1500);//Note que esta linha não será executada por que o complete será executado antes dele devido ao timeout
      }else{
        subscriber.error('Houve um erro');
      }

      subscriber.complete();//essa linha completa o obsevable e fecha ele
    });
  }

  /*
    USANDO PROMISE E OBSERVABLE
  */
  ngOnInit(): void {
    
    //USANDO PROMISE
    this.promise('Filipe F').then(
      (promise)=>{
        console.log(promise)
      },
      (erro)=>{
        console.log(erro)
      });

      //USANDO OBSERVABLE
      const obs = this.observable('Filipe')
      .subscribe(
        (retorno)=>{
          console.log(retorno);
        },
        (erro)=>{
          console.log(erro);
        },
        ()=>{
          console.log('FIM!')
        });

        console.log(obs.closed)//essa linha retorna true se a observable estivar fechada/completa, também seria possível dar um obs.unsubscrible() para fechar a Observable
  }

}
