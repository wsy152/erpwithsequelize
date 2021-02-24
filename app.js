import dotenv from 'dotenv';

dotenv.config();

import './src/database';

import express from 'express';
import empresaRoutes from './src/routes/empresaRoutes';
import usuariosRoutes from './src/routes/usuariosRoutes';
import tokenRoutes from './src/routes/tokenRoutes';

// const swaggerJSDoc = require('swagger-jsdoc');
// const swaggerUI = require('swagger-ui-express');

// const sweggerOptions = {
//   definition: {
//     openapi: '3.0.0.',
//     info: {
//       title: 'teste',
//     },
//     server: ['http://localhost:3000'],

//   },
//   apis: ['*.js'],
// };
// const swaggerDocs = swaggerJSDoc(sweggerOptions);
// this.app.use('/apu=i-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

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
    this.app.use('/tokens/', tokenRoutes);
  }
}
export default new App().app;
