import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ItemPage from './ItemPage';

describe('Item component', () => {
  render(<ItemPage />);

  it('should render properly', async () => {
    const item = await screen.findAllByTestId('item');
    const title = await screen.findAllByTestId('item-title');
    const price = await screen.findAllByTestId('price');
    const description = await screen.findAllByTestId('description');

    expect(item).toBeTruthy();
    expect(title).toBeTruthy();
    expect(price).toBeTruthy();
    expect(description).toBeTruthy();
  });
});
