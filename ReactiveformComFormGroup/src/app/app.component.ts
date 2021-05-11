import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';
  form: FormGroup;



  constructor(){
    this.form = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      phone: new FormControl(''),
      email:  new FormControl(''),
    });
  }

  chamarLog(){
    console.log(this.form.value);
  }
}
