import { Component,  OnInit, AfterViewInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControlName } from '@angular/forms';
import { Usuario } from './model/usuario';

import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { ValidationMessages, GenericValidator, DisplayMessage } from './GenericValidator/GenericValidator';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'Formulário';

  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements :ElementRef[]; 

  form: FormGroup;

  validationMessages: ValidationMessages;
  genericValidation : GenericValidator;
  displayMessages : DisplayMessage = {};
  
  public MASKS = utilsBr.MASKS;
  

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      name: {
        required: 'O Nome é requerido',
        minlength: 'O Nome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Nome precisa ter no máximo 150 caracteres'
      },
      lastName: {
        required: 'O Nome é requerido',
        minlength: 'O Sobrenome precisa ter no mínimo 2 caracteres',
        maxlength: 'O Sobrenome precisa ter no máximo 150 caracteres'
      },
      cpf: {
        required: 'Informe o CPF',
        cpf: 'CPF em formato inválido'
      },
      telefone: {
        required: 'Informe o Telefone',
        telefone: 'Telefone em formato inválido'
      },
      email: {
        required: 'Informe o e-mail',
        email: 'Email inválido'
      }
    };

    this.genericValidation = new GenericValidator(this.validationMessages);
  }

  ngAfterViewInit(): void {
    let events :Observable<any>[] = this.formInputElements
    .map( (element: ElementRef) => fromEvent(element.nativeElement, 'blur'));
    
    merge(...events).subscribe(() => 
      {
        console.info(this.genericValidation.handleMessages(this.form))      
        this.displayMessages = this.genericValidation.handleMessages(this.form);
      });
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      lastName: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(150)]],
      cpf: ['',[Validators.required, NgBrazilValidators.cpf]],
      telefone: ['',[Validators.required, NgBrazilValidators.telefone]],
      email:  ['',[Validators.required, Validators.email]]
    });
  }



  chamarLog(){
    let usuario = new Usuario();
    usuario = Object.assign({},  usuario, this.form.value);
    console.log(usuario);
  }

}
