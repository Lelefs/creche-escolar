import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss'],
})
export class AlunosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  editarAluno() {
    this.router.navigate(['/alunos/perfil']);
  }

  excluirAluno() {
    this.router.navigate(['/alunos/perfil']);
  }

  criarNovoAluno() {
    this.router.navigate(['/alunos/perfil']);
  }
}
