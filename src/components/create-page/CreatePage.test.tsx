import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CreatePage from './CreatePage';

describe('Create page', () => {
  it('should render properly', async () => {
    render(<CreatePage />, { wrapper: MemoryRouter });

    await waitFor(() => new Promise((res) => setTimeout(() => res(1), 2000)), {
      timeout: 8000,
    });

    const groupTitles = await screen.findAllByTestId('section-title');
    const groupSubtitles = await screen.findAllByTestId('section-subtitle');

    expect(groupTitles.length).toBe(4);
    expect(groupSubtitles.length).toBe(4);
  });
});
