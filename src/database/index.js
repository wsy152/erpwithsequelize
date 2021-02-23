import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Empresas from '../models/empresasModels';
import Usuarios from '../models/usuariosModels';

const models = [Usuarios, Empresas];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
