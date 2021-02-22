import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/alunosModels';
import Usuarios from '../models/usuariosModels';

const models = [Aluno, Usuarios];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
