import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = "https://viacep.com.br/ws/";
@Injectable()
export class CepService {

  constructor(private http: HttpClient) { }

  get(cep: string):Observable<string>{

    return this.http.get<string>(`${URL}/${cep}/json/unicode/`);
  }

}
