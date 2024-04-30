import express from 'express';
import { createProductController, showProductController } from './controllers/product.controller';
import userLoginController from './controllers/user.controller';
import {
  validateUsername,
  validatePassword,
  validadeUserAcess,
  validadePasswordAcess,
} from './middlewares/login';
import {
  validateProductName,
  validateProductPrice,
  validateUserId,
} from './middlewares/product';

const app = express();

app.use(express.json());

app.get('/products', showProductController);

app.post(
  '/products', 
  validateProductName,
  validateProductPrice, 
  validateUserId, 
  createProductController,
);
app.post(
  '/login',
  validateUsername,
  validatePassword,
  validadeUserAcess,
  validadePasswordAcess,
  userLoginController,
);

export default app;
