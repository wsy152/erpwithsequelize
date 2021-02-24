const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('usuarios', [
      {
        nome: 'John Doe',
        email: 'john@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        cpf: '269.615.447-19',
        empresa_id: 1,
        ativo: true,
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'Mulan da Silva',
        email: 'mulan@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        cpf: '269.615.445-18',
        empresa_id: 1,
        ativo: true,
        created_at: new Date(),
        updated_at: new Date(),

      },
      {
        nome: 'Patricio Souza Doe',
        email: 'patricio@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        cpf: '269.615.478-09',
        empresa_id: 1,
        ativo: true,
        created_at: new Date(),
        updated_at: new Date(),
      },

    ], {});
  },

  down: async () => {

  },
};
