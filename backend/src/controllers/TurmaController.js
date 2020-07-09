// index, show, store, update, destroy

const Professor = require('../models/Professor');
const Turma = require('../models/Turma');

module.exports = {
  async index(req, res) {
    const { nome } = req.body;

    const turma = await Turma.findOne({ nome });

    if (!turma) {
      return res
        .status(400)
        .json({ error: 'Não existe uma turma cadastrada com esse nome' });
    }

    await turma.populate('professorResponsavel').execPopulate();

    return res.json(turma);
  },

  async show(req, res) {
    const turmas = await Turma.find({});

    for (var i = 0; i < turmas.length; i++) {
      await turmas[i].populate('professorResponsavel').execPopulate();
    }

    return res.json(turmas);
  },

  async store(req, res) {
    const { nome, horarioInicio, horarioFim, professorResponsavel } = req.body;

    const turmaExiste = await Turma.findOne({ nome });

    const professor = await Professor.findOne({ nome: professorResponsavel });

    if (turmaExiste) {
      return res
        .status(400)
        .json({ error: 'Já existe uma turma cadastrada com esse nome' });
    }

    if (!professor) {
      return res
        .status(400)
        .json({ error: 'Não existe nenhum professor com esse nome' });
    }

    const turma = await Turma.create({
      nome,
      horarioInicio,
      horarioFim,
      professorResponsavel: professor._id,
    });

    return res.json(turma);
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      nome,
      horarioInicio,
      horarioFim,
      professorResponsavel,
      alunos,
    } = req.body;

    const turmaId = await Turma.findById({ _id: id });

    const professor = await Professor.findOne({ nome: professorResponsavel });

    if (!professor) {
      return res
        .status(400)
        .json({ error: 'Não existe nenhum professor com esse nome' });
    }

    await Turma.updateOne(
      {
        _id: turmaId._id,
      },
      {
        nome,
        horarioInicio,
        horarioFim,
        professorResponsavel: professor._id,
        alunos,
      },
    );

    return res.json('Turma editada com sucesso');
  },

  async destroy(req, res) {
    const { id } = req.params;

    await Turma.deleteOne({ _id: id });

    return res.json('Turma deletada com sucesso');
  },
};
