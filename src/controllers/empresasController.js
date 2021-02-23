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
}

export default new EmpresaController();
