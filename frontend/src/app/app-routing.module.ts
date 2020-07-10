import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './views/alunos/alunos.component';
import { CriacaoComponent } from './views/alunos//criacao/criacao.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './views/login/login.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { ProfessoresComponent } from './views/professores/professores.component';
import { TurmaComponent } from './views/turma/turma.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'alunos',
    component: AlunosComponent,
  },
  {
    path: 'alunos/perfil',
    component: CriacaoComponent,
  },
  {
    path: 'professores/perfil',
    component: PerfilComponent,
  },
  {
    path: 'turma',
    component: TurmaComponent,
  },
  {
    path: 'professores',
    component: ProfessoresComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
