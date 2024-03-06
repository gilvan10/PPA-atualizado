import { Component } from '@angular/core';
import { Acao } from '../shared/models/acao';
import { ActivatedRoute, Router } from '@angular/router';
import { AcoesPorProgramaPorEixoService } from './acoes-por-programa-por-eixo.service';

@Component({
  selector: 'app-acoes-por-programa-por-eixo',
  templateUrl: './acoes-por-programa-por-eixo.component.html',
  styleUrls: ['./acoes-por-programa-por-eixo.component.css']
})
export class AcoesPorProgramaPorEixoComponent {

    acoes: Acao[] = [];
    eixo: string;
    programa: string;
    periodo: string;

    constructor(private activatedRoute:  ActivatedRoute, private acoesPorProgramaPorEixo: AcoesPorProgramaPorEixoService, private router: Router) {
       this.eixo = '';
       this.programa = '';
       this.periodo = '';
    }

    ngOnInit(): void {
      this.getAcoes();
    }

    getAcoes() {
      this.eixo = this.activatedRoute.snapshot.params['eixo'];
      this.programa = this.activatedRoute.snapshot.params['programa'];
      this.periodo = this.activatedRoute.snapshot.params['ano'];
      this.acoesPorProgramaPorEixo.getAcoes(this.eixo,this.programa,this.periodo).subscribe({
        next: acoes => {
            this.acoes = acoes; 
            console.log(this.acoes);
        },
        error: err => console.log('Error', err)
      });
    }

    getPrefeiturasBairroPorAcoes(acao: string) {
      this.router.navigate(['prefeituras-bairros-por-acoes/' + this.eixo + '/' + this.programa + '/' + acao + '/' + this.periodo]);
    }

}
