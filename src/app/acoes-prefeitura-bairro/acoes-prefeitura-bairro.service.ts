import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'; //Adicionar no app.module
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Acao } from '../shared/models/acao';

@Injectable({
  providedIn: 'root'
})
export class AcoesPrefeituraBairroService {

  constructor(private http: HttpClient) { 
     
  }
  
  getAcoes(prefeituraBairro: string, periodo: string): Observable<Acao[]> {
    //private readonly url = endereço; uma outra opção mas nesse modelo acho que não pode alterar a variável
    let idPrefeituraBairro: number;
    if(prefeituraBairro.localeCompare('Centro-Brotas') == 0)
       idPrefeituraBairro = 1;
    else if(prefeituraBairro.localeCompare('Subúrbio-Ilhas') == 0)
            idPrefeituraBairro = 2;
    else if(prefeituraBairro.localeCompare('Cajazeiras') == 0)
            idPrefeituraBairro = 3;
    else if(prefeituraBairro.localeCompare('Itapuã-Ipitanga') == 0)
            idPrefeituraBairro = 4;
    else if(prefeituraBairro.localeCompare('Cidade-Baixa') == 0)
            idPrefeituraBairro = 5;
    else if(prefeituraBairro.localeCompare('Barra-Pituba') == 0)
            idPrefeituraBairro = 6;
    else if(prefeituraBairro.localeCompare('Liberdade-São-Caetano') == 0)
            idPrefeituraBairro = 7;
    else if(prefeituraBairro.localeCompare('Cabula-Trancredo-Neves') == 0)
            idPrefeituraBairro = 8;
    else if(prefeituraBairro.localeCompare('Pau-da-Lima') == 0)
            idPrefeituraBairro = 9;
    else if(prefeituraBairro.localeCompare('Valéria') == 0)
            idPrefeituraBairro = 10;
    else //a ultima opção é Inter-Regionais
        idPrefeituraBairro = 11;
    const url = 'http://localhost:8080/ppa/infor-acao/prefeitura-bairro/' + idPrefeituraBairro + '/' + periodo;
    //console.log(url);
    
    return this.http.get<Acao[]>(url);
  } 

  /* getAcoes(prefeituraBairro: string, periodo: string) {
    //private readonly url = endereço; uma outra opção mas nesse modelo acho que não pode alterar a variável
    const url = 'ppa/infor-acao-prefeitura-bairro/' + '1/' + periodo;
    console.log(url);
    
    return this.http.get<Acao[]>(url).pipe(
      map(response => {
          return response;
      }),
      catchError(this.handleException('getAcoes'))
    );
  }

  private handleException<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log('${operation} failed: ${error.message}');
        return throwError(error);
      }
  } */

  /*
  getAcoes(prefeituraBairro: string, periodo: string): Observable<Acao[]> {
    const url = 'ppa/infor-acao-prefeitura-bairro/' + '1/' + periodo;
    console.log(url);
    const params = new HttpParams({fromString: 'name=term'});
    return this.http.request('GET', url, {responseType:'json', params});
  } */

}
