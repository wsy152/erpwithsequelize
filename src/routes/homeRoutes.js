import { Router } from 'express';
import UsuariosController from '../controllers/usuariosController';

const router = new Router();

router.post('/', UsuariosController.store);

export default router;
