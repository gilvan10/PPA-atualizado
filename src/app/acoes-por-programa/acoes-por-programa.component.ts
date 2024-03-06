import { Component } from '@angular/core';
import { Acao } from '../shared/models/acao';
import { ActivatedRoute } from '@angular/router';
import { AcoesPorProgramaService } from './acoes-por-programa.service';

@Component({
  selector: 'app-acoes-por-programa',
  templateUrl: './acoes-por-programa.component.html',
  styleUrls: ['./acoes-por-programa.component.css']
})
export class AcoesPorProgramaComponent {

    acoes: Acao[] = [];
    programa: string;
    periodo: string;

    constructor(private activatedRoute:  ActivatedRoute, private acoesPorProgramaService: AcoesPorProgramaService) {
      this.programa = '';
      this.periodo = '';
    }

    ngOnInit(): void {
      this.getAcoes();
    }

    getAcoes() {
      this.programa = this.activatedRoute.snapshot.params['programa'];
      this.periodo = this.activatedRoute.snapshot.params['ano'];
      //let prefeituraBairro = 'Centro-Brotas';
      //let periodo = '2022-2025';
      //console.log(this.prefeituraBairro);
      //console.log(this.periodo);
      //erro no subscribe decrepitado
      /*this.acaoPrefeituraBairroService.getAcoes(prefeituraBairro,periodo).subscribe(resultado =>{
         const p = JSON.stringify(resultado);
         this.acoes = JSON.parse(p);
      }, errorResultado => {
         alert("Erro ao carregar as ações.");
      });*/
      this.acoesPorProgramaService.getAcoes(this.programa,this.periodo).subscribe({
        next: acoes => {
            this.acoes = acoes; 
            console.log(this.acoes);
        },
        error: err => console.log('Error', err)
      });
    }

}
