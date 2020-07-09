const { Schema, model } = require('mongoose');

const AlunoSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
    foto: String,
    responsavel: {
      type: String,
      required: true,
    },
    turma: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

AlunoSchema.virtual('foto_url').get(function () {
  return `http://localhost:3333/files/${this.foto}`;
});

module.exports = model('Aluno', AlunoSchema);
