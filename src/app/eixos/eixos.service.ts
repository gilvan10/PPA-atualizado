import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Adicionar no app.module
import { Eixo } from '../shared/models/eixo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EixosService {

  constructor(private http: HttpClient) { }

  getEixos(periodo: string): Observable<Eixo[]>  {
    const url = 'http://localhost:8080/ppa/eixo/ano/' + periodo;
    console.log(url);
    
    return this.http.get<Eixo[]>(url);
  }

}
