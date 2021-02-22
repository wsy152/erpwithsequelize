import Usuarios from '../models/usuariosModels';

class UsuariosController {
  async store(req, res) {
    try {
      const novoUsuarios = await Usuarios.create(
        req.body,
        // nome: 'edvaldo',
        // email: 'edvaldo1@bol.com.br',
        // password: '123456',
        // empresa_id: 3,
        // cpf: '269.615.448-08',

      );

      return res.status(200).json(novoUsuarios);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const usuarios = await Usuarios.findAll();
      return res.json(usuarios);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const usuario = await Usuarios.findByPk(id);
      return res.json(usuario);
    } catch (error) {
      return res.json(null);
    }
  }
}
export default new UsuariosController();
