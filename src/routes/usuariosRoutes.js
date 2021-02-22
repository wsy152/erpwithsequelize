import { Router } from 'express';
import usuariosController from '../controllers/usuariosController';

const router = new Router();

router.post('/', usuariosController.store);
router.get('/', usuariosController.index);
router.get('/:id', usuariosController.show);

export default router;
