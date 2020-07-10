var admin = require('firebase-admin');

module.exports = {
  async index(req, res) {
    const { email } = req.body;

    admin
      .auth()
      .getUserByEmail(email)
      .then(function (userRecord) {
        return res.json(userRecord);
      })
      .catch(function (error) {
        return res.json({ error });
      });
  },

  async show(req, res) {
    admin
      .auth()
      .listUsers()
      .then(function (listUsersResult) {
        const professores = listUsersResult.users;
        return res.json(professores);
      })
      .catch(function (error) {
        return res.json({ error });
      });
  },

  async store(req, res) {
    const { email, senha, nome } = req.body;

    admin
      .auth()
      .createUser({
        email,
        password: senha,
        displayName: nome,
      })
      .then(function (userRecord) {
        return res.json(userRecord);
      })
      .catch(function (error) {
        return res.json({ error });
      });
  },

  async update(req, res) {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    admin
      .auth()
      .updateUser(id, {
        email,
        emailVerified: true,
        password: senha,
        displayName: nome,
      })
      .then(function (userRecord) {
        return res.json(userRecord);
      })
      .catch(function (error) {
        return res.json({ error });
      });
  },

  async destroy(req, res) {
    const { id } = req.params;

    admin
      .auth()
      .deleteUser(id)
      .then(function () {
        return res.json('Professor deletado com sucesso');
      })
      .catch(function (error) {
        return res.json({ error });
      });
  },
};
