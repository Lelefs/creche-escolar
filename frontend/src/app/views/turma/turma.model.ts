export interface Turma {
  nome: string;
  horarioInicio: number;
  horarioFim: number;
  faixaEtaria: number;
  professorResponsavel: {
    email: string;
    nome: string;
    uid: string;
  };
}
