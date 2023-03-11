import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from './Card';
import { PreviewProduct } from '../../types/product';
import { MemoryRouter } from 'react-router-dom';

const CARD_MOCK: PreviewProduct = {
  id: 0,
  preview: 'http://localhost:3000/images/1.jpg',
  title: 'Рюкзак «Для умных и свободных»',
  price: 4999,
  availability: true,
};

describe('Card component', () => {
  it('should render properly', async () => {
    render(<Card product={CARD_MOCK} />, { wrapper: MemoryRouter });
    const image = (await screen.findByRole('img')) as HTMLImageElement;
    const title = await screen.findByRole('heading');

    expect(image.src).toBe(CARD_MOCK.preview);
    expect(title.textContent).toBe(CARD_MOCK.title);
  });
});
