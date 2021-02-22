import { Router } from 'express';
import empresaController from '../controllers/empresasController';

const router = new Router();

router.post('/', empresaController.index);

export default router;
