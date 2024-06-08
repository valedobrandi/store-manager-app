const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const modelMock = require('../../mocks/product.mock');
const productsModal = require('../../../src/models/products.model');

describe('UNIT TEST - PRODUCT MODEL', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('1 - Return every product from DB', async function () {
    sinon.stub(connection, 'execute').resolves([modelMock.everyProduct]);

    const searchProducts = await productsModal.searchEveryProduct();
    
    expect(searchProducts).to.be.an('array');
    expect(searchProducts).to.be.deep.equal(modelMock.everyProduct);
  });

  it('2 - Return one product by ID from DB', async function () {
    sinon.stub(connection, 'execute').resolves([[modelMock.singleProduct]]);
    const PRODUCT_ID = '1';

    const searchProductsById = await productsModal.searchProductById(PRODUCT_ID);

    expect(searchProductsById).to.be.an('object');
    expect(searchProductsById).to.be.deep.equal(modelMock.singleProduct);
  });
});