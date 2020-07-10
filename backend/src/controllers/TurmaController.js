const Professor = require('../models/Professor');
const Turma = require('../models/Turma');

var admin = require('firebase-admin');

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

    return res.json(turmas);
  },

  async store(req, res) {
    const {
      nome,
      horarioInicio,
      horarioFim,
      faixaEtaria,
      emailProfessor,
    } = req.body;

    const turmaExiste = await Turma.findOne({ nome });

    if (turmaExiste) {
      return res
        .status(400)
        .json({ error: 'Já existe uma turma cadastrada com esse nome' });
    }

    const professor = await admin.auth().getUserByEmail(emailProfessor);

    if (!professor) {
      return res
        .status(400)
        .json({ error: 'Não existe nenhum professor com esse email' });
    }

    const professorResponsavel = {
      uid: professor.uid,
      email: professor.email,
      nome: professor.displayName,
    };

    const turma = await Turma.create({
      nome,
      horarioInicio,
      horarioFim,
      faixaEtaria,
      professorResponsavel,
    });

    return res.json(turma);
  },

  async update(req, res) {
    const { id } = req.params;
    const {
      nome,
      horarioInicio,
      horarioFim,
      emailProfessor,
      faixaEtaria,
      alunos,
    } = req.body;

    const turmaId = await Turma.findById({ _id: id });

    const professor = await admin.auth().getUserByEmail(emailProfessor);

    if (!professor) {
      return res
        .status(400)
        .json({ error: 'Não existe nenhum professor com esse email' });
    }

    const professorResponsavel = {
      uid: professor.uid,
      email: professor.email,
      nome: professor.displayName,
    };

    await Turma.updateOne(
      {
        _id: turmaId._id,
      },
      {
        nome,
        horarioInicio,
        horarioFim,
        professorResponsavel,
        faixaEtaria,
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
