import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { AlunosComponent } from './views/alunos/alunos.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { TurmaComponent } from './views/turma/turma.component';
import { ProfessoresComponent } from './views/professores/professores.component';
import { CriacaoComponent } from './views/alunos/criacao/criacao.component';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MenuComponent,
    AlunosComponent,
    PerfilComponent,
    TurmaComponent,
    ProfessoresComponent,
    CriacaoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
