import { Router } from 'express';

const router = new Router();

router.get('/', (req, res) => {
  res.send('Ola mundo Maravilhoso');
});

export default router;
