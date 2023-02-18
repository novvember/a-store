import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AddToCartForm from './AddToCartForm';

describe('AddToCartForm component', () => {
  render(<AddToCartForm id="test" />);

  it('should render properly', async () => {
    const selects = await screen.findAllByRole('combobox');
    const button = await screen.findAllByRole('button');

    expect(selects.length).toBe(3);
    expect(button).toBeTruthy();
  });

  it('should have button disabled on render', async () => {
    render(<AddToCartForm id="test" />);
    const button = (await screen.findByRole('button')) as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
  });
});
