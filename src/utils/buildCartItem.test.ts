import { FullProduct } from '../types/product';
import buildCartItem from './buildCartItem';
import { ProductParams } from '../types/cartItem';

import data from '../mocks/groups.json';

const MOCK_PRODUCT: FullProduct = data.groups[0].products[0];

const MOCK_PARAMS_3: ProductParams = {
  size: 'm',
  color: 'red',
  stickerNumber: '3',
};

const MOCK_PARAMS_2: ProductParams = {
  size: 'm',
  color: 'red',
};

const MOCK_PARAMS_1: ProductParams = {
  size: 'm',
};

const MOCK_PARAMS_0: ProductParams = {};

describe('buidCartItem', () => {
  it('should return valid object if 3 params in product', () => {
    const res = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS_3);

    expect(res).toBeTruthy();
    expect(res.description).toBeTruthy();
    expect(res.params).toBeTruthy();
    expect(res.quantity).toBe(1);
  });

  it('should return valid object if 2 params in product', () => {
    const res = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS_2);

    expect(res).toBeTruthy();
    expect(res.description).toBeTruthy();
    expect(res.params).toBeTruthy();
    expect(res.quantity).toBe(1);
  });

  describe('buidCartItem', () => {
    it('should return valid object if 1 params in product', () => {
      const res = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS_1);

      expect(res).toBeTruthy();
      expect(res.description).toBeTruthy();
      expect(res.params).toBeTruthy();
      expect(res.quantity).toBe(1);
    });

    it('should return valid object if 0 params in product', () => {
      const res = buildCartItem(MOCK_PRODUCT, MOCK_PARAMS_0);

      expect(res).toBeTruthy();
      expect(res.description).toBeTruthy();
      expect(res.params).toBeTruthy();
      expect(res.quantity).toBe(1);
    });
  });
});
