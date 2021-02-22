import Aluno from '../models/alunosModels';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'João',
      sobrenome: 'Meireles',
      email: 'felipe@bol.com.br',
      altura: '1,00',
      peso: '40',
      idade: 15,
      dt_nascimento: '2016-01-01 00:00:00+00:00',

    });

    res.status(200).json(novoAluno);
  }
}
export default new HomeController();
