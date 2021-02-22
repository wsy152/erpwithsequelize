import Usuarios from '../models/usuariosModels';

class UsuariosController {
  async store(req, res) {
    try {
      const novoUsuarios = await Usuarios.create({
        nome: 'edvaldo',
        email: 'edvaldo@bol.com.br',
        password: '123456',
        empresa_id: 3,
        cpf: '269.615.448-18',

      });

      res.status(200).json(novoUsuarios);
    } catch (e) {
      res.status(400).json('deu erro');
    }
  }
}
export default new UsuariosController();
