import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/alunosModels';

const models = [Aluno];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
