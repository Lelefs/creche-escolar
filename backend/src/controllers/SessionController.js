var firebase = require('firebase/app');

require('firebase/auth');
require('firebase/firestore');

module.exports = {
  store(req, res) {
    const { email } = req.body;
    const password = req.body.senha;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function (userRecord) {
        return res.json(userRecord);
      })
      .catch(function (error) {
        return res.json({ error });
      });
  },
};
