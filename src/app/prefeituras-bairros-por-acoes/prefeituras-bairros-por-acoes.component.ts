import { Component } from '@angular/core';
import { Acao } from '../shared/models/acao';
import { ActivatedRoute } from '@angular/router';
import { PrefeiturasBairrosPorAcoesService } from './prefeituras-bairros-por-acoes.service';

@Component({
  selector: 'app-prefeituras-bairros-por-acoes',
  templateUrl: './prefeituras-bairros-por-acoes.component.html',
  styleUrls: ['./prefeituras-bairros-por-acoes.component.css']
})
export class PrefeiturasBairrosPorAcoesComponent {

  acoes: any[] = [];
  acoesAux: Acao[] = [];
  eixo: string;
  programa: string;
  acao: string;
  periodo: string;

  constructor(private activatedRoute:  ActivatedRoute, private prefeituraBairrosPorAcoesService: PrefeiturasBairrosPorAcoesService) {
      this.eixo = '';
      this.programa = '';
      this.acao = '';
      this.periodo = '';
  }

  ngOnInit(): void {
    this.getAcoes();
  }

  getAcoes() {
    this.eixo = this.activatedRoute.snapshot.params['eixo'];
    this.programa = this.activatedRoute.snapshot.params['programa'];
    this.acao = this.activatedRoute.snapshot.params['acao'];
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
    this.prefeituraBairrosPorAcoesService.getAcoes(this.eixo,this.programa,this.acao,this.periodo).subscribe({
      next: acoes => {
          this.acoesAux = acoes; 
          console.log(this.acoesAux);
          for(let i = 0; i < this.acoesAux.length; i++) {
             if(this.acoesAux[i].prefeituraBairro == 1)
                this.acoes.push({nome: 'Centro/Brotas'});
             else if(this.acoesAux[i].prefeituraBairro == 2)
                this.acoes.push({nome: 'Subúrbio/Ilhas'});
             else if(this.acoesAux[i].prefeituraBairro == 3)
                this.acoes.push({nome: 'Cajazeiras'});
             else if(this.acoesAux[i].prefeituraBairro == 4)
                this.acoes.push({nome: 'Itapuã/Ipitanga'});
             else if(this.acoesAux[i].prefeituraBairro == 5)
                this.acoes.push({nome: 'Cidade Baixa'});
             else if(this.acoesAux[i].prefeituraBairro == 6)
                this.acoes.push({nome: 'Barra/Pituba'});
             else if(this.acoesAux[i].prefeituraBairro == 7)
                this.acoes.push({nome: 'Liberdade/São Caetano'});
             else if(this.acoesAux[i].prefeituraBairro == 8)
                this.acoes.push({nome: 'Cabula/Tancredo Neves'});
             else if(this.acoesAux[i].prefeituraBairro == 9)
                this.acoes.push({nome: 'Pau da Lima'});
             else if(this.acoesAux[i].prefeituraBairro == 10)
                this.acoes.push({nome: 'Valéria'});
              else 
                this.acoes.push({nome: 'Inter-Regionais'});
          }
      },
      error: err => console.log('Error', err)
    });
  }

}
