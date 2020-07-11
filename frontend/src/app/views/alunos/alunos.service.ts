import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Aluno } from './alunos.model';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  baseUrl = 'http://localhost:3333/alunos';

  criarEdiar = 'criar' || 'editar';

  alunoNovo: Aluno = {
    nome: '',
    idade: 0,
    turma: '',
    responsavel: '',
  };

  constructor(private http: HttpClient, private router: Router) {}

  listAll() {
    return this.http.get<any[]>(`${this.baseUrl}/all`);
  }

  delete(id: string) {
    this.http.delete(`${this.baseUrl}/${id}`).subscribe(res => {
      return res;
    });
  }

  create(aluno) {
    const alunoCriar = {
      nome: aluno.nome,
      idade: aluno.idade,
      responsavel: aluno.responsavel,
      turma: aluno.turma,
    };

    this.http.post<any>(this.baseUrl, alunoCriar).subscribe(
      dados => {
        alert('Aluno criado com sucesso!');
        return this.router.navigate(['/alunos']);
      },
      error => {
        return alert(error.error.error);
      },
    );
  }

  update(aluno) {
    const alunoEditar = {
      nome: aluno.nome,
      idade: aluno.idade,
      responsavel: aluno.responsavel,
      turma: aluno.turma,
    };

    this.http.put<any>(`${this.baseUrl}/${aluno._id}`, alunoEditar).subscribe(
      dados => {
        alert('Aluno editado com sucesso!');
        return this.router.navigate(['/alunos']);
      },
      error => {
        return alert(error.error.error);
      },
    );
  }
}
