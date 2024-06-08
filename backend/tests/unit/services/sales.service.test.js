const { expect } = require('chai');
const sinon = require('sinon');
const salesMock = require('../../mocks/sales.mock');
const salesModel = require('../../../src/models/sales.model');
const salesService = require('../../../src/services/sales.service');

describe('UNIT TEST - SALES SERVICE', function () {
  afterEach(function () {
    sinon.restore();
  });
  it('1 - Return every sale', async function () {
    sinon.stub(salesModel, 'searchEverySale').resolves(salesMock.everySale);

    const searchProducts = await salesService.searchEverySale();
    
    expect(searchProducts.status).to.be.equal('SUCCESSFUL');
    expect(searchProducts.data).to.be.deep.equal(salesMock.everySale);
  });

  it('2 - Return a sale by id with SUCCESSFUL', async function () {
    sinon.stub(salesModel, 'searchSaleById').resolves(salesMock.saleById);
    const SALE_ID = '1';
    const searchProducts = await salesService.searchSaleById(SALE_ID);
    
    expect(searchProducts.status).to.be.equal('SUCCESSFUL');
    expect(searchProducts.data).to.be.deep.equal(salesMock.saleById);
  });

  it('3 - Return a sale by id with NOT_FOUND', async function () {
    sinon.stub(salesModel, 'searchSaleById').resolves([]);
    const SALE_ID = '999';
    const searchProducts = await salesService.searchSaleById(SALE_ID);
    
    expect(searchProducts.status).to.be.equal('NOT_FOUND');
    expect(searchProducts.data).to.be.deep.equal({ message: 'Sale not found' });
  });
});