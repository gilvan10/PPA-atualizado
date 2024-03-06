import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css']
})
export class AcoesComponent {

  periodo: string = '2022-2025';

  constructor(private router: Router) {

  }
  
	onSelected(value:string): void {
		this.periodo = value;
	}
  
  getAcoes(prefeituraBairro: String) {
    //console.log(prefeituraBairro);  
    //"http://localhost:4200/acoes-prefeitura-bairro/Centro-Brotas/2022-2025"
    let url = 'http://localhost:4200/acoes-prefeitura-bairro/' + prefeituraBairro + this.periodo;
    //console.log(frase);
    this.router.navigate(['acoes-prefeitura-bairro/' + prefeituraBairro + '/' +this.periodo]);
  }

}
