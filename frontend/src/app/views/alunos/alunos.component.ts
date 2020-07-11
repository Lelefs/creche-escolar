import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  alunos: Array<any>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private alunosService: AlunosService,
  ) {}

  ngOnInit(): void {
    const user = this.loginService.verificarUsuario();
    if (!user) {
      this.router.navigate(['/']);
    } else {
      this.listAll();
    }
  }

  listAll() {
    this.alunosService.listAll().subscribe(dados => {
      this.alunos = dados;
    });
  }

  editarAluno(aluno) {
    this.alunosService.alunoNovo = aluno;
    this.alunosService.criarEdiar = 'editar';
    this.router.navigate(['/alunos/perfil']);
  }

  excluirAluno(aluno) {
    this.alunosService.delete(aluno._id);
    const index = this.alunos.indexOf(aluno);
    this.alunos.splice(index, 1);
  }

  criarNovoAluno() {
    this.alunosService.criarEdiar = 'criar';
    this.router.navigate(['/alunos/perfil']);
  }
}
