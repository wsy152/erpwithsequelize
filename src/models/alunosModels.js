import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      altura: Sequelize.STRING,
      peso: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      dt_nascimento: Sequelize.DATE,
    }, {
      sequelize,
    });
    return this;
  }
}
