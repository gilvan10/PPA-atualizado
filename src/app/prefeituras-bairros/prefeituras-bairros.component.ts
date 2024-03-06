import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prefeituras-bairros',
  templateUrl: './prefeituras-bairros.component.html',
  styleUrls: ['./prefeituras-bairros.component.css'],
})

export class PrefeiturasBairrosComponent {

  periodo: string = '2022-2025';

  constructor(private router: Router) {

  }

  /*periodos: Periodo[];

  constructor() {
    this.periodos = [ //exemplo tipo json
      {ano: "2022-2025"},
      {ano: "2018-2021"},
    ];
  }*/
  
	onSelected(value:string): void {
		this.periodo = value;
	}
  
  getAcoes(prefeituraBairro: String) {
    console.log(prefeituraBairro);  
    //"http://localhost:4200/acoes-prefeitura-bairro/Centro-Brotas/2022-2025"
    let url = 'http://localhost:4200/acoes-prefeitura-bairro/' + prefeituraBairro + this.periodo;
    //console.log(frase);
    this.router.navigate(['acoes-prefeitura-bairro/' + prefeituraBairro + '/' +this.periodo]);
  }

}
