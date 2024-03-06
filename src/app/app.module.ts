import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrefeiturasBairrosComponent } from './prefeituras-bairros/prefeituras-bairros.component';
import { HeaderComponent } from './header/header.component';
import { AcoesPrefeituraBairroComponent } from './acoes-prefeitura-bairro/acoes-prefeitura-bairro.component';
import { EixosComponent } from './eixos/eixos.component';
import { ProgramasComponent } from './programas/programas.component';
import { BairrosComponent } from './bairros/bairros.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcoesComponent } from './acoes/acoes.component';
import { ProgramasPorEixosComponent } from './programas-por-eixos/programas-por-eixos.component';
import { Home2Component } from './home2/home2.component';
import { AcoesPorProgramaComponent } from './acoes-por-programa/acoes-por-programa.component';
import { AcoesPorProgramaPorEixoComponent } from './acoes-por-programa-por-eixo/acoes-por-programa-por-eixo.component';
import { PrefeiturasBairrosPorAcoesComponent } from './prefeituras-bairros-por-acoes/prefeituras-bairros-por-acoes.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrefeiturasBairrosComponent,
    HeaderComponent,
    AcoesPrefeituraBairroComponent,
    EixosComponent,
    ProgramasComponent,
    BairrosComponent,
    AcoesComponent,
    ProgramasPorEixosComponent,
    Home2Component,
    AcoesPorProgramaComponent,
    AcoesPorProgramaPorEixoComponent,
    PrefeiturasBairrosPorAcoesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
