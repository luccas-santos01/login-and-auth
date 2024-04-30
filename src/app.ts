import express from 'express';
import { createProductController, showProductController } from './controllers/product.controller';
import userLoginController from './controllers/user.controller';
import {
  validateUsername,
  validatePassword,
  validadeUserAcess,
  validadePasswordAcess,
} from './middlewares/login';

const app = express();

app.use(express.json());

app.get('/products', showProductController);

app.post('/products', createProductController);
app.post(
  '/login',
  validateUsername,
  validatePassword,
  validadeUserAcess,
  validadePasswordAcess,
  userLoginController,
);

export default app;
