import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuarios extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: ' Nome deve conter minimo 3 caracter',
          },

        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            args: [3, 255],
            msg: ' email invalido',
          },

        },
      },
      password_hash: {
        type: Sequelize.STRING,
      },

      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          notEmpty: {
            args: [3, 255],
            msg: ' PassWord deve conter 3 caracteres',
          },

        },
      },
      empresa_id: {
        type: Sequelize.INTEGER,
      },
      cpf: {
        type: Sequelize.STRING,

      },
      ativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },

    }, {
      sequelize,
    });
    this.addHook('beforeSave', async (usuario) => {
      if (usuario.password) {
        usuario.password_hash = await bcryptjs.hash(usuario.password, 8);
      }
    });
    return this;
  }
}
