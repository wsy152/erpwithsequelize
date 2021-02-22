import Empresa from '../models/empresasModels';

class EmpresaController {
  async index(req, res) {
    const novaEmpresa = await Empresa.create({
      razao: 'Jonas e Cordeiro',
      fantasia: 'Cordeiro',
      cnpj: '01.545.828/0001-61',
      ie: '32657892',
      dt_abertura: '2016-01-01 00:00:00+00:00',

    });

    res.status(200).json(novaEmpresa);
  }
}
export default new EmpresaController();
