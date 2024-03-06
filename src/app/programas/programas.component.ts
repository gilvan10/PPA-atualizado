import { Component } from '@angular/core';
import { Programa } from '../shared/models/programa';
import { ProgramasService } from './programas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})
export class ProgramasComponent {

    programas: Programa[] = [];
    periodo: string;

    constructor(private programaService: ProgramasService, private router: Router) {
      this.periodo = '2022-2025';
      this.getProgramas(this.periodo);
    }

    onSelected(value:string): void {
      this.periodo = value;
      this.getProgramas(this.periodo);
    }

    getProgramas(periodo:string) {
      this.programaService.getProgramas(this.periodo).subscribe({
        next: programas => {
            this.programas = programas; 
            console.log(this.programas);
        },
        error: err => console.log('Error', err)
      });
    }

    getAcoesPorPrograma(nomePrograma: string) {
      this.router.navigate(['acoes-por-programa/' + nomePrograma + '/' + this.periodo]);
    }

}
