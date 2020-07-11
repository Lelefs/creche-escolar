import { Component, OnInit } from '@angular/core';
import { TurmaService } from './turma.service';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.scss'],
})
export class TurmaComponent implements OnInit {
  turmaForm = {
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

  salvarOuEditar: string = '';

  constructor(private turmaService: TurmaService) {}

  ngOnInit(): void {
    this.salvarOuEditar = this.turmaService.criarEdiar;

    this.turmaForm =
      this.salvarOuEditar === 'editar'
        ? this.turmaService.turmaNova
        : {
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
  }

  salvarEditar() {
    this.salvarOuEditar === 'editar'
      ? this.turmaService.update(this.turmaForm)
      : this.turmaService.create(this.turmaForm);
  }
}
