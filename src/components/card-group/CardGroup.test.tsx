import { render, screen } from '@testing-library/react';
import CardGroup from './CardGroup';
import data from '../../mocks/groups.json';
import { MemoryRouter } from 'react-router-dom';

const MOCK_GROUP = data.groups[0];

describe('CardGroup component', () => {
  it('should render properly', async () => {
    render(<CardGroup group={MOCK_GROUP} />, { wrapper: MemoryRouter });

    const cards = await screen.findAllByTestId('card');

    expect(cards.length).toBe(MOCK_GROUP.products.length);
  });
});
