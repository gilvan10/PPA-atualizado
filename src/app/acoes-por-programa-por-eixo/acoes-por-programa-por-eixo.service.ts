import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acao } from '../shared/models/acao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcoesPorProgramaPorEixoService {

  constructor(private http: HttpClient) { 

  }

  getAcoes(eixo: string, programa: string, periodo: string): Observable<Acao[]> {
    const url = 'http://localhost:8080/ppa/infor-acao/por-programa-por-eixo/' + eixo + '/' + programa + '/' + periodo;
    //console.log(url);
    
    return this.http.get<Acao[]>(url);
  }
}
