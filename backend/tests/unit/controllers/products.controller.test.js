const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const productsMock = require('../../mocks/product.mock');
const productsController = require('../../../src/controllers/products.controller');
const productsService = require('../../../src/services/products.service');

const { expect } = chai;
chai.use(sinonChai);

describe('UNIT TEST - PRODUCT CONTROLLER', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('1 - Return every product', async function () {
    sinon.stub(productsService, 'searchEveryProduct')
      .resolves({ status: 'SUCCESSFUL', data: productsMock.everyProduct });

    const req = {};
      
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
        
    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock.everyProduct);
  });

  it('3 - Return a product by ID with SUCCESSFUL', async function () {
    sinon.stub(productsService, 'searchEveryProduct')
      .resolves({ status: 'SUCCESSFUL', data: productsMock.singleProduct });

    const req = {
      params: { productId: '1' },
    };
      
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
        
    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock.singleProduct);
  });

  it('4 - Return a product by ID with NOT_FOUND', async function () {
    sinon.stub(productsService, 'searchEveryProduct')
      .resolves({ status: 'NOT_FOUND', data: { message: 'Product not found' } });

    const req = {
      params: { productId: '999' },
    };
      
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
        
    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith(sinon.match.has('message'));
  });
});