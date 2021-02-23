import Sequelize, { Model } from 'sequelize';

export default class Empresa extends Model {
  static init(sequelize) {
    super.init({
      razao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 150],
            msg: ' Razão Social deve conter minímo entre 3 e 150 caracteres',
          },

        },
      },
      fantasia: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 150],
            msg: ' Nome Fantasia deve conter minímo entre 3 e 150 caracteres',
          },

        },
      },
      cnpj: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [18, 18],
            msg: 'CNPJ deve conter 18 caracteres',
          },

        },
      },
      ie: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 25],
            msg: 'I.E deve conter no minímo 3 caracteres',
          },

        },
      },
      dt_abertura: Sequelize.DATE,
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

    }, {
      sequelize,
    });
    return this;
  }
}
