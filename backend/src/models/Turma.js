const { Schema, model } = require('mongoose');

const TurmaSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    horarioInicio: {
      type: Number,
      required: true,
    },
    horarioFim: {
      type: Number,
      required: true,
    },
    faixaEtaria: {
      type: Number,
      required: true,
    },
    professorResponsavel: {
      type: Object,
    },
    alunos: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Aluno',
      },
    ],
  },
  {
    timestamps: true,
  },
);

module.exports = model('Turma', TurmaSchema);
