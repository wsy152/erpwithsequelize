import { Router } from 'express';
import empresaController from '../controllers/empresasController';

const router = new Router();

router.get('/', empresaController.index);
router.post('/', empresaController.store);
router.get('/:id', empresaController.show);
router.put('/:id', empresaController.update);
router.delete('/:id', empresaController.delete);

export default router;
