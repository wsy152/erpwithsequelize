module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('usuarios', {
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

    email: {
      type: Sequelize.STRING(150),
      allowNull: true,
      unique: true,
    },
    cpf: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    empresa_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'empresas', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    ativo: {
      type: Sequelize.BOOLEAN,
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

  down: async (queryInterface) => queryInterface.dropTable('usuarios'),
};
