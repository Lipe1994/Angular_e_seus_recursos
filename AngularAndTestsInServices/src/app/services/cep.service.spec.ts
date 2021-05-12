import { TestBed } from '@angular/core/testing';

import { CepService } from './cep.service';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const fakeData = `
{
  cep: "01001-000",
  logradouro: "Praça da Sé",
  complemento: "lado ímpar",
  bairro: "Sé",
  localidade: "São Paulo",
  uf: "SP",
  unidade: "",
  ibge: "3550308",
  gia: "1004"
  }
` 

class MockCepService{
  get = () => new Observable((observer: Observer<any>) => observer.next(fakeData))
}

const getFake = () => new Observable((observer: Observer<any>) => observer.next(fakeData))


describe('CepService com mock', () => {
  let cepService: CepService;
  let http: HttpClient;

  beforeEach(() =>{ 
    const bed = TestBed.configureTestingModule({
      providers:[
        {provide: HttpClient, useClass: MockCepService},
        CepService
      ]
    })
    http = bed.get(HttpClient);
    cepService = bed.get(CepService);
  });

  it('deve retornar um cep', () => {
    cepService
      .get('01001-000')
      .subscribe((result)=> {
        expect(result).toEqual(fakeData);
      }) 
  })
});


describe('CepService com mock 2', () => {
  let cepService: CepService;

  beforeEach(() =>{ 
    const bed = TestBed.configureTestingModule({
      providers:[
        CepService
      ],
      imports: [
        HttpClientModule
      ]
    })
    cepService = bed.get(CepService);
  });

  it('deve retornar um cep', () => {
    spyOn(cepService, 'get').and.returnValue(getFake())

    cepService
      .get('01001-000')
      .subscribe((result)=> {
        console.log("CepService com mock 2", result)
        expect(result).toEqual(fakeData);
      }) 
  })
});


describe('CepService sem mock', () => {
  let cepService: CepService;

  beforeEach(() =>{ 
    const bed = TestBed.configureTestingModule({
      providers:[
        CepService
      ],
      imports: [
        HttpClientModule
      ]
    })

    cepService = bed.get(CepService);
  });

  it('deve retornar um cep', (done) => {
    cepService
      .get('01001-000')
      .subscribe((result)=> {

        console.log("CepService sem mock",JSON.stringify(result));

        expect(JSON.stringify(result).indexOf("Praça da Sé") > -1).toBe(true);
        done()

      }); 
  })
});
