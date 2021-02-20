import Aluno from '../models/alunosModels';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Felipe',
      sobrenome: 'Meireles',
      email: 'felipe@bol.com.br',
      altura: '1,00',
      peso: '40',
      idade: '11',

    });

    res.status(200).json(novoAluno);
  }
}
export default new HomeController();
