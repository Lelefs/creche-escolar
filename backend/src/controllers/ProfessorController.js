const Professor = require('../models/Professor');

module.exports = {
  async index(req, res) {
    const { nome } = req.body;

    const professor = await Professor.findOne({ nome });

    return res.json(professor);
  },

  async show(req, res) {
    const professores = await Professor.find({});
    return res.json(professores);
  },

  async store(req, res) {
    const { nome } = req.body;

    const professorExiste = await Professor.findOne({ nome });

    if (professorExiste) {
      return res
        .status(400)
        .json({ error: 'Já existe um professor cadastrado com esse nome' });
    }

    const professor = await Professor.create({
      nome,
    });

    return res.json(professor);
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome } = req.body;

    const professorId = await Professor.findById({ _id: id });

    await Professor.updateOne(
      {
        _id: professorId._id,
      },
      {
        nome,
      },
    );

    return res.json('Professor editado com sucesso');
  },

  async destroy(req, res) {
    const { id } = req.params;

    await Professor.deleteOne({ _id: id });

    return res.json('Professor deletado com sucesso');
  },
};
