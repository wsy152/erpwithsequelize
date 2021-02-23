import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import empresaRoutes from './src/routes/empresaRoutes';
import usuariosRoutes from './src/routes/usuariosRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/empresas/', empresaRoutes);
    this.app.use('/usuarios/', usuariosRoutes);
  }
}
export default new App().app;
