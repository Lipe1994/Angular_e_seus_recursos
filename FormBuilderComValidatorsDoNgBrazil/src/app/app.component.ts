import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './model/usuario';

import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';
  form: FormGroup;
  public MASKS = utilsBr.MASKS;
  

  constructor(private fb: FormBuilder) {
    
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      cpf: ['',[Validators.required, NgBrazilValidators.cpf]],
      phone: ['',[<any>Validators.required, <any>NgBrazilValidators.telefone]],
      email:  ['',[Validators.required, Validators.email]]
    });

  }

  chamarLog(){
    let usuario = new Usuario();
    usuario = Object.assign({},  usuario, this.form.value);
    console.log(usuario);

  }
}
