import { Component } from '@angular/core';
import { Programa } from '../shared/models/programa';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramasPorEixosService } from './programas-por-eixos.service';

@Component({
  selector: 'app-programas-por-eixos',
  templateUrl: './programas-por-eixos.component.html',
  styleUrls: ['./programas-por-eixos.component.css']
})
export class ProgramasPorEixosComponent {

  programas: Programa[] = [];
  eixo: string;
  periodo: string;

  constructor(private activatedRoute:  ActivatedRoute, private programasPorEixosService: ProgramasPorEixosService, private router: Router) {
    this.eixo = '';
    this.periodo = '';
  }

  ngOnInit(): void {
    this.getProgramas();
  }

  getProgramas() {
    this.eixo = this.activatedRoute.snapshot.params['eixo'];
    this.periodo = this.activatedRoute.snapshot.params['ano'];
    this.programasPorEixosService.getProgramas(this.eixo,this.periodo).subscribe({
      next: programas => {
          this.programas = programas; 
          console.log(this.programas);
      },
      error: err => console.log('Error', err)
    });
  }

  getAcoesPorProgramaPorEixo(nomePrograma: string) {
    this.router.navigate(['acoes-por-programa-por-eixo/' + this.eixo + '/' + nomePrograma + '/' + this.periodo]);
  }

}
