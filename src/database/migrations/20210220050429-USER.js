module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('USER', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    sobrenome: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(150),
      allowNull: true,
    },
    cpf: {
      type: Sequelize.STRING(14),
      allowNull: true,
      unique: true,
    },
    ativo: {
      type: Sequelize.BOOLEAN(true),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    company_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'COMPANY', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },

    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: async (queryInterface) => queryInterface.dropTable('USER'),
};
