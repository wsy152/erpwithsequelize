import Usuarios from '../models/usuariosModels';

class UsuariosController {
  async store(req, res) {
    try {
      const novoUsuarios = await Usuarios.create(req.body);

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

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const usuario = await Usuarios.findByPk(id);
      if (!usuario) {
        return res.status(400).json({
          errors: ['usuarios não existe'],
        });
      }
      const updateDados = await usuario.update(req.body);
      return res.json(updateDados);
    } catch (error) {
      return res.json(null);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const usuario = await Usuarios.findByPk(id);
      if (!usuario) {
        return res.status(400).json({
          errors: ['usuarios não existe'],
        });
      }
      await usuario.destroy();
      return res.json({
        mensagem: {
          msg: 'Usuario excluido com Sucesso',
        },
      });
    } catch (error) {
      return res.json(null);
    }
  }
}
export default new UsuariosController();
