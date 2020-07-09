const Aluno = require('../models/Aluno');
const Turma = require('../models/Turma');
const { show } = require('./TurmaController');

module.exports = {
  async show(req, res) {
    const { id } = req.params;

    const turma = await Turma.findById({ _id: id });

    const alunosArray = await Aluno.find({ _id: turma.alunos });

    turma.alunos = alunosArray;

    return res.json(turma);
  },

  async destroy(req, res) {
    const { id } = req.params;
    const { alunoId } = req.body;

    const turma = await Turma.findById({ _id: id });

    turma.alunos.pop(alunoId);

    await Aluno.updateOne({ _id: alunoId }, { turma: '' });

    await turma.save();

    return res.json(turma);
  },

  async create(req, res) {
    const { id } = req.params;
    const { alunoId } = req.body;

    const turma = await Turma.findById({ _id: id });

    turma.alunos.push(alunoId);

    await Aluno.updateOne({ _id: alunoId }, { turma: turma.nome });

    await turma.save();

    return res.json(turma);
  },
};
