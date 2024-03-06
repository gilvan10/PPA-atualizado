import { Component } from '@angular/core';
import { Eixo } from '../shared/models/eixo';
import { EixosService } from './eixos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eixos',
  templateUrl: './eixos.component.html',
  styleUrls: ['./eixos.component.css']
})
export class EixosComponent {

    eixos: Eixo[] = [];
    periodo: string;

    constructor(private eixoService: EixosService, private router: Router) {
      this.periodo = '2022-2025';
      this.getEixos(this.periodo);
    }

    onSelected(value:string): void {
      this.periodo = value;
      this.getEixos(this.periodo);
    }

    getEixos(periodo:string) {
      this.eixoService.getEixos(this.periodo).subscribe({
        next: eixos => {
            this.eixos = eixos; 
            console.log(this.eixos);
        },
        error: err => console.log('Error', err)
      });
    }

    getProgramas(eixo: string) {
      console.log(eixo);
      console.log(this.periodo);
      this.router.navigate(['programas-por-eixo/' + eixo + '/' +this.periodo]);
    }
    
    
}
