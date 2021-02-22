import Sequelize, { Model } from 'sequelize';

export default class Empresa extends Model {
  static init(sequelize) {
    super.init({
      razao: Sequelize.STRING,
      fantasia: Sequelize.STRING,
      cnpj: Sequelize.STRING,
      ie: Sequelize.STRING,
      dt_abertura: Sequelize.DATE,

    }, {
      sequelize,
    });
    return this;
  }
}
