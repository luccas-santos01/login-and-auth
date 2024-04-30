import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import app from '../../../src/app';

chai.use(sinonChai);

describe('UsersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('Deve realizar o login com sucesso',
    async function () {
      const response = await chai.request(app)
        .post('/login')
        .send({
          username: "Hagar",
          password: "terrível"
        })

      expect(response.status).to.be.equal(200);
    });

});
