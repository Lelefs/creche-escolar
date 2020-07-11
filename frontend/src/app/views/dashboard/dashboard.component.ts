import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {
    const user = this.loginService.verificarUsuario();
    if (!user) {
      this.router.navigate(['/']);
    }
  }

  editarTurma() {
    this.router.navigate(['/turma']);
  }

  excluirTurma() {
    this.router.navigate(['/turma']);
  }

  criarNovaTurma() {
    this.router.navigate(['/turma']);
  }
}
