import Empresa from '../models/empresasModels';

class EmpresaController {
  async store(req, res) {
    try {
      const novaEmpresa = await Empresa.create(req.body);

      return res.status(200).json(novaEmpresa);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const empresas = await Empresa.findAll();
      return res.json(empresas);
    } catch (error) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const empresas = await Empresa.findByPk(id);
      return res.json(empresas);
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
      const empresas = await Empresa.findByPk(id);
      if (!empresas) {
        return res.status(400).json({
          errors: ['Empresa não existe'],
        });
      }
      const updateDados = await empresas.update(req.body);
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
      const empresas = await Empresa.findByPk(id);
      if (!empresas) {
        return res.status(400).json({
          errors: ['Empresa não existe'],
        });
      }
      await empresas.destroy();
      return res.json({
        mensagem: {
          msg: 'Empresa excluido com Sucesso',
        },
      });
    } catch (error) {
      return res.json(null);
    }
  }
}

export default new EmpresaController();
