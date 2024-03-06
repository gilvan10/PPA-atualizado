import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //Adicionar no app.module
import { Programa } from '../shared/models/programa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramasService {

  constructor(private http: HttpClient) { }

  getProgramas(periodo: string): Observable<Programa[]>  {
    const url = 'http://localhost:8080/ppa/infor-programa/ano/' + periodo;
    return this.http.get<Programa[]>(url);
  }

}
