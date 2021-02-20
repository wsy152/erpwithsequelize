import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      altura: Sequelize.STRING,
      peso: Sequelize.STRING,
      idade: Sequelize.STRING,
    }, {
      sequelize,
    });
    return this;
  }
}
