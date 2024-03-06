import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; //Adicionar no app.module
import { Observable } from 'rxjs';
import { Programa } from '../shared/models/programa';

@Injectable({
  providedIn: 'root'
})
export class ProgramasPorEixosService {

  constructor(private http: HttpClient) { }

  getProgramas(eixo: string, periodo: string): Observable<Programa[]>  {

    const url = 'http://localhost:8080/ppa/infor-programa/eixo/' + eixo + '/' + periodo;
    console.log(url);
    return this.http.get<Programa[]>(url);

  }
}
