import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Gallery from './Gallery';

const IMAGES = [
  'http://qa-games.ru/astore/public/images/43306375.jpeg',
  'http://qa-games.ru/astore/public/images/25133982.png',
  'http://qa-games.ru/astore/public/images/93661622.png',
  'http://qa-games.ru/astore/public/images/1_3d.png',
  'http://qa-games.ru/astore/public/images/2_3d.png',
  'http://qa-games.ru/astore/public/images/45157942.png',
  'http://qa-games.ru/astore/public/images/Frame_118.png',
];

const TITLE = 'Test';

describe('Gallery component', () => {
  it('should render properly', async () => {
    render(<Gallery images={IMAGES} title={TITLE} />);

    const grid = await screen.findAllByTestId('grid');
    const images = await screen.findAllByTestId('gallery-image');

    expect(grid).toBeTruthy();
    expect(images.length).toBe(7);
  });
});
