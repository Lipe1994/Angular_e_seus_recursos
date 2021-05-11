import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      name: [],
      lastName: [],
      phone: [],
      email:  [],
    });

  }

  chamarLog(){
    console.log(this.form.value);
  }
}
