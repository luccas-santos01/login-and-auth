import express from 'express';
import { createProductController, showProductController } from './controllers/product.controller';

const app = express();

app.use(express.json());

app.get('/products', showProductController);

app.post('/products', createProductController);

export default app;
