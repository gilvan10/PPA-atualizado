import { Component } from '@angular/core';
import { Acao } from '../shared/models/acao';
import { AcoesPrefeituraBairroService } from './acoes-prefeitura-bairro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-acoes-prefeitura-bairro',
  templateUrl: './acoes-prefeitura-bairro.component.html',
  styleUrls: ['./acoes-prefeitura-bairro.component.css']
})
export class AcoesPrefeituraBairroComponent {

    acoes: Acao[] = [];
    prefeituraBairro: string;
    periodo: string;

    constructor(private activatedRoute:  ActivatedRoute,private acaoPrefeituraBairroService: AcoesPrefeituraBairroService) {
       this.prefeituraBairro = '';
       this.periodo = '';
    }

    ngOnInit(): void {
      this.getAcoes();
    }

    getAcoes() {
      this.prefeituraBairro = this.activatedRoute.snapshot.params['nome'];
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
      this.acaoPrefeituraBairroService.getAcoes(this.prefeituraBairro,this.periodo).subscribe({
        next: acoes => {
            this.acoes = acoes; 
            console.log(this.acoes);
        },
        error: err => console.log('Error', err)
      });
    }


}
