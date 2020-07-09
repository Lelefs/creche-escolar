const { Schema, model } = require('mongoose');

const ProfessorSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = model('Professor', ProfessorSchema);
