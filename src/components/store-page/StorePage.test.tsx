import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import StorePage from './StorePage';

describe('Store page', () => {
  it('should render properly', async () => {
    render(<StorePage />, { wrapper: MemoryRouter });

    const title = await screen.findByTestId('section-title');
    const subtitle = await screen.findByTestId('section-subtitle');

    await waitFor(() => new Promise((res) => setTimeout(() => res(1), 2000)), {
      timeout: 8000,
    });

    const cards = await screen.findAllByTestId('card');

    expect(title).toBeTruthy();
    expect(subtitle).toBeTruthy();
    expect(cards.length).toBe(5);
  });
});
