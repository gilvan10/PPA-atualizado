import { Component } from '@angular/core';
import { Bairro } from '../shared/models/bairro';
import { BairrosService } from './bairros.service';

@Component({
  selector: 'app-bairros',
  templateUrl: './bairros.component.html',
  styleUrls: ['./bairros.component.css']
})
export class BairrosComponent {
  
  bairros: Bairro[] = [];
  prefeituraBairro: string;
  periodo: string;

  constructor(private bairroService: BairrosService) {
    this.prefeituraBairro = 'Centro/Brotas';
    this.periodo = '2022-2025';
    this.getBairros();
  }

  onPref(value:string): void {
    this.prefeituraBairro = value;
    console.log(this.prefeituraBairro);
  }

  onSelected(value:string): void {
		this.periodo = value;
    console.log(this.periodo);
	}

  getBairros() {
    let idPrefeituraBairro: number;
    if(this.prefeituraBairro.localeCompare('Centro/Brotas') == 0)
       idPrefeituraBairro = 1;
    else if(this.prefeituraBairro.localeCompare('Subúrbio/Ilhas') == 0)
            idPrefeituraBairro = 2;
    else if(this.prefeituraBairro.localeCompare('Cajazeiras') == 0)
            idPrefeituraBairro = 3;
    else if(this.prefeituraBairro.localeCompare('Itapuâ/Ipitanga') == 0)
            idPrefeituraBairro = 4;
    else if(this.prefeituraBairro.localeCompare('Cidade Baixa') == 0)
            idPrefeituraBairro = 5;
    else if(this.prefeituraBairro.localeCompare('Barra/Pituba') == 0)
            idPrefeituraBairro = 6;
    else if(this.prefeituraBairro.localeCompare('Liberdade/São Caetano') == 0)
            idPrefeituraBairro = 7;
    else if(this.prefeituraBairro.localeCompare('Cabula/Trancredo Neves') == 0)
            idPrefeituraBairro = 8;
    else if(this.prefeituraBairro.localeCompare('Pau da Lima') == 0)
            idPrefeituraBairro = 9;
    else if(this.prefeituraBairro.localeCompare('Valéria') == 0)
            idPrefeituraBairro = 10;
    else //a ultima opção é Inter-Regionais
        idPrefeituraBairro = 11;
    this.bairroService.getBairros(idPrefeituraBairro,this.periodo).subscribe({
      next: bairros => {
          this.bairros = bairros; 
          console.log(this.bairros);
      },
      error: err => console.log('Error', err)
    });
    
  }

}
