import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import app from '../../../src/app';
import { Request, Response } from 'express';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Deve cadastrar um produto com sucesso', async function () {
    const response = await chai.request(app)
      .post('/products')
      .send({
      name: "Escudo do capitão",
      price: "2 peças de ouro",
      userId: 1
      })
    expect(response.status).to.be.equal(201);
    });

    it('Deve exibir a lista de produtos cadastrados com sucesso', async function () {
      const response = await chai.request(app)
        .get('/products')

    expect(response.status).to.be.equal(200);
    })
  });
