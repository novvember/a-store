import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Store from './Store';

describe('Store component', () => {
  it('should render properly', async () => {
    render(<Store />, { wrapper: MemoryRouter });

    const title = await screen.findByTestId('title');
    const subtitle = await screen.findByTestId('subtitle');

    await waitFor(() => new Promise((res) => setTimeout(() => res(1), 2000)), {
      timeout: 8000,
    });

    const cards = await screen.findAllByTestId('card');

    expect(title).toBeTruthy();
    expect(subtitle).toBeTruthy();
    expect(cards.length).toBe(5);
  });
});
