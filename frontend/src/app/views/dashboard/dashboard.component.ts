import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { DashboardService } from './dashboard.service';
import { TurmaService } from '../turma/turma.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  turmas: Array<any>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private dashboardService: DashboardService,
    private turmaService: TurmaService,
  ) {}

  ngOnInit(): void {
    const user = this.loginService.verificarUsuario();
    if (!user) {
      this.router.navigate(['/']);
    } else {
      this.listar();
    }
  }

  listar() {
    this.dashboardService.listar().subscribe(dados => {
      this.turmas = dados;
    });
  }

  editarTurma(turma) {
    this.turmaService.turmaNova = turma;
    this.turmaService.criarEdiar = 'editar';
    this.router.navigate(['/turma']);
  }

  excluirTurma(turma) {
    this.dashboardService.excluir(turma._id);
    const index = this.turmas.indexOf(turma);
    this.turmas.splice(index, 1);
  }

  criarNovaTurma() {
    this.turmaService.criarEdiar = 'criar';
    this.router.navigate(['/turma']);
  }
}
