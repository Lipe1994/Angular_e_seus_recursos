import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';
  form: FormGroup;


  constructor(private fb: FormBuilder) {
    
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      phone: ['',[Validators.required, Validators.minLength(10)]],
      email:  ['',[Validators.required, Validators.email]]
    });

  }

  chamarLog(){
    let usuario = new Usuario();
    usuario = Object.assign({},  usuario, this.form.value);
    console.log(usuario);

  }
}
