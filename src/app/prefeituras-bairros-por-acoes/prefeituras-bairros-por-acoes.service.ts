import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Acao } from '../shared/models/acao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrefeiturasBairrosPorAcoesService {

  constructor(private http: HttpClient) {

   }
   //através das ações vai apresentadas as prefeituras-bairro
   getAcoes(eixo: string, programa: string, acao: string, periodo: string): Observable<Acao[]> {
    const url = 'http://localhost:8080/ppa/infor-acao/extra/' + eixo + '/' + programa + '/' + acao + '/' + periodo;
    console.log(url);
    
    return this.http.get<Acao[]>(url);
  }
}
