const { expect } = require('chai');
const sinon = require('sinon');
const modelMock = require('../../mocks/product.mock');
const productsModel = require('../../../src/models/products.model');
const productsService = require('../../../src/services/products.service');

describe('UNIT TEST - PRODUCT SERVICE', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('1 - Return every product', async function () {
    sinon.stub(productsModel, 'searchEveryProduct').resolves(modelMock.everyProduct);

    const searchProducts = await productsService.searchEveryProduct();
    
    expect(searchProducts.status).to.be.equal('SUCCESSFUL');
    expect(searchProducts.data).to.be.deep.equal(modelMock.everyProduct);
  });

  it('2 - Return a product by id with SUCCESSFUL', async function () {
    sinon.stub(productsModel, 'searchProductById').resolves(modelMock.singleProduct);
    const PRODUCT_ID = '1';
    const searchProducts = await productsService.searchProductById(PRODUCT_ID);
    
    expect(searchProducts.status).to.be.equal('SUCCESSFUL');
    expect(searchProducts.data).to.be.deep.equal(modelMock.singleProduct);
  });

  it('3 - Return a product by id with NOT_FOUND', async function () {
    sinon.stub(productsModel, 'searchProductById').resolves();
    const PRODUCT_ID = '999';
    const searchProducts = await productsService.searchProductById(PRODUCT_ID);
    
    expect(searchProducts.status).to.be.equal('NOT_FOUND');
    expect(searchProducts.data).to.be.deep.equal({ message: 'Product not found' });
  });
});