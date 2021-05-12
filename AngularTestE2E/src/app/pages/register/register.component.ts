import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Usuario } from 'src/app/core/models/usuario';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Register';
  form: FormGroup;
  success: boolean = false;
  

  constructor(private fb: FormBuilder) {
    
    this.form = this.fb.group({
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email:  ['',[Validators.required, Validators.email]]
    });

  }

  save(){
    let usuario = new Usuario();
    usuario = Object.assign({},  usuario, this.form.value);
    
    if(this.form.valid){
      this.success = true;
    }else{
      this.success = false;
    }

  }
}
