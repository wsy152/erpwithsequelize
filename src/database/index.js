import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/alunosModels';
import Empresa from '../models/empresasModels';
import Usuarios from '../models/usuariosModels';

const models = [Aluno, Usuarios, Empresa];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
