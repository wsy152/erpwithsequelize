module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('COMPANY', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    razao: {
      type: Sequelize.STRING(150),
      allowNull: false,
    },
    fantasia: {
      type: Sequelize.STRING(150),
      allowNull: true,
    },
    cnpj: {
      type: Sequelize.STRING(18),
      allowNull: false,
    },
    ie: {
      type: Sequelize.STRING(20),
      allowNull: true,
    },
    dt_abertura: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    ativo: {
      type: Sequelize.BOOLEAN(true),
      allowNull: true,
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

  down: async (queryInterface) => queryInterface.dropTable('COMPANY'),
};
