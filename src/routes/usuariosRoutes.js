import { Router } from 'express';
import usuariosController from '../controllers/usuariosController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', usuariosController.store);
router.get('/', loginRequired, usuariosController.index);
router.get('/:id', usuariosController.show);
router.put('/:id', usuariosController.update);
router.delete('/:id', usuariosController.delete);

export default router;
