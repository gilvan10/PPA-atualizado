import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component'; 
import { HeaderComponent } from './header/header.component';
import { EixosComponent } from './eixos/eixos.component';
import { ProgramasComponent } from './programas/programas.component';
import { AcoesComponent } from './acoes/acoes.component';
import { AcoesPrefeituraBairroComponent } from './acoes-prefeitura-bairro/acoes-prefeitura-bairro.component';
import { PrefeiturasBairrosComponent } from './prefeituras-bairros/prefeituras-bairros.component';
import { BairrosComponent } from './bairros/bairros.component';
import { ProgramasPorEixosComponent } from './programas-por-eixos/programas-por-eixos.component';
import { AcoesPorProgramaComponent } from './acoes-por-programa/acoes-por-programa.component'; 
import { AcoesPorProgramaPorEixoComponent } from './acoes-por-programa-por-eixo/acoes-por-programa-por-eixo.component';
import { PrefeiturasBairrosPorAcoesComponent } from './prefeituras-bairros-por-acoes/prefeituras-bairros-por-acoes.component';

const routes: Routes = [
  {path: 'home', component: Home2Component},//HomeComponent é o mapa com os marcadores, só vai ser exibido o mapa com a regionalização disponibilizado pelo ppa 2022-2025 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  //{path: 'home2', component: Home2Component},//HomeComponent2 é o mapa com a regionalização.
  {path: 'eixos', component: EixosComponent},
  {path: 'programas', component: ProgramasComponent},
  {path: 'programas-por-eixo/:eixo/:ano', component: ProgramasPorEixosComponent},
  {path: 'acoes', component: AcoesComponent},
  {path: 'acoes-prefeitura-bairro/:nome/:ano', component: AcoesPrefeituraBairroComponent},
  {path: 'acoes-por-programa/:programa/:ano', component: AcoesPorProgramaComponent},
  {path: 'acoes-por-programa-por-eixo/:eixo/:programa/:ano', component: AcoesPorProgramaPorEixoComponent},
  {path: 'prefeituras-bairros', component: PrefeiturasBairrosComponent},
  {path: 'prefeituras-bairros-por-acoes/:eixo/:programa/:acao/:ano', component: PrefeiturasBairrosPorAcoesComponent},
  {path: 'bairros', component: BairrosComponent},
  {path: 'header', component: HeaderComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
