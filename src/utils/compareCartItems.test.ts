import { ProductParams } from '../types/cartItem';
import compareCartItems from './compareCartItems';
import data from '../mocks/groups.json';
import buildCartItem from './buildCartItem';

const MOCK_PRODUCT = data.groups[0].products[0];

const MOCK_PARAMS: ProductParams = {
  size: 'm',
  color: 'red',
};

describe('compareCartItems function', () => {
  const item1 = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS);

  it('should return true on 2 equal objects', () => {
    const item2 = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS);

    expect(compareCartItems(item1, item2)).toBeTruthy();
  });

  it('should return true if id and params are the same', () => {
    const item2 = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS);
    item2.description.price = 0;
    item2.description.title = '';
    item2.totalCount = 10;

    expect(compareCartItems(item1, item2)).toBeTruthy();
  });

  it('should return false if ids differ', () => {
    const item2 = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS);
    item2.description.id = 111;

    expect(compareCartItems(item1, item2)).toBeFalsy();
  });

  it('should return false if params lengths differ', () => {
    const item2 = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS);
    delete item2.params.color;

    expect(compareCartItems(item1, item2)).toBeFalsy();
  });

  it('should return false if params values differ', () => {
    const item2 = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS);
    item2.params.color = 'test';

    expect(compareCartItems(item1, item2)).toBeFalsy();
  });
});
