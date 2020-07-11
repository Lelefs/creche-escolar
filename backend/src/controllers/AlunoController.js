const Aluno = require('../models/Aluno');

module.exports = {
  async index(req, res) {
    const { nome } = req.body;

    const aluno = await Aluno.findOne({ nome });

    if (!aluno) {
      return res
        .status(400)
        .json({ error: 'Não existe nenhum aluno com esse nome' });
    }

    return res.json(aluno);
  },

  async show(req, res) {
    const alunos = await Aluno.find({});
    return res.json(alunos);
  },

  async store(req, res) {
    // const { filename } = req.file;
    const { nome, idade, responsavel, turma } = req.body;

    const aluno = await Aluno.create({
      nome,
      idade,
      // foto: filename,
      responsavel,
      turma,
    });

    return res.json(aluno);
  },

  async update(req, res) {
    const { id } = req.params;
    // const { filename } = req.file;
    const { nome, idade, responsavel, turma } = req.body;

    const alunoId = await Aluno.findById({ _id: id });

    await Aluno.updateOne(
      {
        _id: alunoId._id,
      },
      {
        nome,
        idade,
        // foto: filename,
        responsavel,
        turma,
      },
    );

    return res.json('Aluno editado com sucesso');
  },

  async destroy(req, res) {
    const { id } = req.params;

    await Aluno.deleteOne({ _id: id });

    return res.json('Aluno deletado com sucesso');
  },
};
