import { Button } from '@alfalab/core-components/button';
import {
  BaseSelectChangePayload,
  Select,
} from '@alfalab/core-components/select';
import { Space } from '@alfalab/core-components/space';
import { Toast } from '@alfalab/core-components/toast';
import { useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../store';
import { itemAdded } from '../../store/cartSlice';
import { ProductParams } from '../../types/cartItem';

import { FullProduct } from '../../types/product';
import buildCartItem from '../../utils/buildCartItem';
import getParamValue from '../../utils/getParamValue';
import getParamLabel from '../../utils/getParamLabel';

type AddToCartFormProps = {
  product: FullProduct;
};

function AddToCartForm({ product }: AddToCartFormProps) {
  const { colors, sizes, stickerNumbers } = product;
  const dispatch = useAppDispatch();

  const [isToastOpened, setIsToastOpened] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  const getInitialSelected = () => {
    const selected: ProductParams = {};
    if (colors) selected.color = '';
    if (sizes) selected.size = '';
    if (stickerNumbers) selected.stickerNumber = '';
    return selected;
  };

  const [selected, setSelected] = useState<ProductParams>(getInitialSelected);

  const [disabled, setDisabled] = useState(true);

  const handleSelect = (e: BaseSelectChangePayload) => {
    const name = e.name;
    const selected = e.selected?.key || '';

    if (name) {
      setSelected((state) => ({
        ...state,
        [name]: selected,
      }));
    }
  };

  const handleSubmit = () => {
    const item = buildCartItem(product, selected);
    dispatch(itemAdded(item));
    setIsToastOpened(true);
  };

  useEffect(() => {
    setDisabled(Object.values(selected).some((value) => value === ''));
  }, [selected]);

  const colorsOptions =
    colors &&
    colors.map((color) => ({
      key: color,
      content: getParamValue(color),
    }));

  const sizesOptions =
    sizes &&
    sizes.map((size) => ({
      key: size,
      content: size,
    }));

  const stickersOptions =
    stickerNumbers &&
    stickerNumbers.map((sticker) => ({
      key: sticker.toString(),
      content: sticker.toString(),
    }));

  return (
    <form>
      <Space>
        <Space direction="horizontal">
          {colors && (
            <Select
              size="s"
              options={colorsOptions!}
              name="color"
              placeholder={getParamLabel('color')}
              selected={selected.color}
              onChange={handleSelect}
              dataTestId="select"
            />
          )}

          {sizes && (
            <Select
              options={sizesOptions!}
              placeholder={getParamLabel('size')}
              name="size"
              onChange={handleSelect}
              selected={selected.size}
              dataTestId="select"
            />
          )}

          {stickerNumbers && (
            <Select
              options={stickersOptions!}
              placeholder={getParamLabel('stickerNumber')}
              name="stickerNumber"
              onChange={handleSelect}
              selected={selected.stickerNumber}
              dataTestId="select"
            />
          )}
        </Space>

        <Toast
          open={isToastOpened}
          anchorElement={button.current}
          position="right"
          offset={[0, 8]}
          badge="positive"
          title="Добавлено"
          hasCloser={false}
          block={false}
          onClose={() => {
            setIsToastOpened(false);
          }}
          autoCloseDelay={1500}
        />

        <Button
          ref={button}
          size="m"
          view="primary"
          disabled={disabled}
          onClick={handleSubmit}
          dataTestId="button"
        >
          В корзину
        </Button>
      </Space>
    </form>
  );
}

export default AddToCartForm;
