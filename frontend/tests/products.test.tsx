import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import App from '../src/App';
import { renderWithRedux } from './helpers/renderWithRedux';
import { handlers } from './mocks/handlers';

const server = setupServer(...handlers);

describe('PRODUCTS FUNCTION - TEST', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Search by "ID"', async () => {
    renderWithRedux(<App />);

    await userEvent.click(screen.getByRole('button', { name: 'id' }));
    await userEvent.type(screen.getByRole('textbox'), '1');
    await userEvent.click(screen.getByRole('button', { name: 'SEARCH' }));

    expect(await screen.findByRole('row', { name: '10 Teste 10' })).toBeInTheDocument();
  });
});
