const { Router } = require('express');
const multer = require('multer');
const uploadConfig = require('../config/upload');

const AlunoController = require('../controllers/AlunoController');
const ProfessorController = require('../controllers/ProfessorController');
const TurmaController = require('../controllers/TurmaController');
const TurmaAlunosController = require('../controllers/TurmaAlunosController');

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/alunos', AlunoController.index);
routes.get('/alunos/all', AlunoController.show);
routes.post('/alunos', upload.single('foto'), AlunoController.store);
routes.put('/alunos/:id', upload.single('foto'), AlunoController.update);
routes.delete('/alunos/:id', AlunoController.destroy);

routes.get('/professores', ProfessorController.index);
routes.get('/professores/all', ProfessorController.show);
routes.post('/professores', ProfessorController.store);
routes.put('/professores/:id', ProfessorController.update);
routes.delete('/professores/:id', ProfessorController.destroy);

routes.get('/turmas', TurmaController.index);
routes.get('/turmas/all', TurmaController.show);
routes.post('/turmas', TurmaController.store);
routes.put('/turmas/:id', TurmaController.update);
routes.delete('/turmas/:id', TurmaController.destroy);

routes.get('/turmaAlunos/:id', TurmaAlunosController.show);
routes.delete('/turmaAlunos/:id', TurmaAlunosController.destroy);
routes.post('/turmaAlunos/:id', TurmaAlunosController.create);

module.exports = routes;
