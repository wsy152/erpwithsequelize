import { Router } from 'express';
import usuariosController from '../controllers/usuariosController';

const router = new Router();

router.post('/', usuariosController.store);

export default router;
