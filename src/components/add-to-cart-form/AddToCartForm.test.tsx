import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import data from '../../mocks/groups.json';
import AddToCartForm from './AddToCartForm';

const MOCK_PRODUCT = data.groups[0].products[0];

describe('AddToCartForm component', () => {
  render(<AddToCartForm product={MOCK_PRODUCT} />);

  it('should render properly', async () => {
    const selects = await screen.findAllByRole('combobox');
    const button = await screen.findAllByRole('button');

    expect(selects.length).toBe(3);
    expect(button).toBeTruthy();
  });

  it('should have button disabled on render', async () => {
    render(<AddToCartForm product={MOCK_PRODUCT} />);
    const button = (await screen.findByRole('button')) as HTMLButtonElement;
    expect(button.disabled).toBeTruthy();
  });
});
