import { Component, OnInit } from '@angular/core';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-criacao',
  templateUrl: './criacao.component.html',
  styleUrls: ['./criacao.component.scss'],
})
export class CriacaoComponent implements OnInit {
  salvarOuEditar: string = '';

  alunoForm = {
    nome: '',
    idade: 0,
    turma: '',
    responsavel: '',
  };

  constructor(private alunosService: AlunosService) {}

  ngOnInit(): void {
    this.salvarOuEditar = this.alunosService.criarEdiar;

    this.alunoForm =
      this.salvarOuEditar === 'editar'
        ? this.alunosService.alunoNovo
        : {
            nome: '',
            idade: 0,
            turma: '',
            responsavel: '',
          };
  }

  salvarEditar() {
    this.salvarOuEditar === 'editar'
      ? this.alunosService.update(this.alunoForm)
      : this.alunosService.create(this.alunoForm);
  }
}
