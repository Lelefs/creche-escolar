import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Turma } from './turma.model';

@Injectable({
  providedIn: 'root',
})
export class TurmaService {
  baseUrl = 'http://localhost:3333/turmas';

  criarEdiar = 'criar' || 'editar';

  turmaNova: Turma = {
    nome: '',
    horarioInicio: 8,
    horarioFim: 9,
    faixaEtaria: 0,
    professorResponsavel: {
      email: '',
      nome: '',
      uid: '',
    },
  };

  constructor(private http: HttpClient, private router: Router) {}

  create(turma) {
    const turmaCriar = {
      nome: turma.nome,
      horarioInicio: turma.horarioInicio,
      horarioFim: turma.horarioFim,
      faixaEtaria: turma.faixaEtaria,
      emailProfessor: turma.professorResponsavel.email,
      alunos: turma.alunos,
    };
    this.http.post<any>(this.baseUrl, turmaCriar).subscribe(
      data => {
        alert('Turma criada com sucesso');
        return this.router.navigate(['/dashboard']);
      },
      error => {
        return alert(error.error.error);
      },
    );
  }

  update(turma) {
    const turmaEditar = {
      nome: turma.nome,
      horarioInicio: turma.horarioInicio,
      horarioFim: turma.horarioFim,
      faixaEtaria: turma.faixaEtaria,
      emailProfessor: turma.professorResponsavel.email,
      alunos: turma.alunos,
    };
    this.http.put<any>(`${this.baseUrl}/${turma._id}`, turmaEditar).subscribe(
      dados => {
        alert('Turma editada com sucesso!');
        return this.router.navigate(['/dashboard']);
      },
      error => {
        return alert(error.error.error);
      },
    );
  }
}
