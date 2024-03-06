import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Adicionar no app.module
import { Observable } from 'rxjs';
import { Bairro } from '../shared/models/bairro';

@Injectable({
  providedIn: 'root'
})
export class BairrosService {

  constructor(private http: HttpClient) {
   
  }

  getBairros(prefeituraBairro: number, periodo: string): Observable<Bairro[]> {
    //private readonly url = endereço; uma outra opção mas nesse modelo acho que não pode alterar a variável
    const url = 'http://localhost:8080/ppa/infor-bairros/' + prefeituraBairro + '/' + periodo;
    console.log(url);
    
    return this.http.get<Bairro[]>(url)
  } 
}
