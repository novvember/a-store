import { Button } from '@alfalab/core-components/button';
import {
  BaseSelectChangePayload,
  Select,
} from '@alfalab/core-components/select';
import { Space } from '@alfalab/core-components/space';
import { useEffect, useState } from 'react';

import data from '../../mocks/groups.json';
import getColorName from '../../utils/getColorName';

type AddToCartFormProps = {
  id: string;
};

function AddToCartForm({ id }: AddToCartFormProps) {
  const { colors, sizes, stickerNumbers } = data.groups[0].products[1];

  const getInitialSelected = () => {
    const selected: Record<string, string> = {};
    if (colors) selected.color = '';
    if (sizes) selected.size = '';
    if (stickerNumbers) selected.stickerNumber = '';
    return selected;
  };

  const [selected, setSelected] = useState(getInitialSelected);

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
    console.log('submited');
    console.log(selected);
  };

  useEffect(() => {
    setDisabled(Object.values(selected).some((value) => value === ''));
  }, [selected]);

  const colorsOptions =
    colors &&
    colors.map((color) => ({
      key: color,
      content: getColorName(color),
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
              placeholder="Цвет"
              selected={selected.color}
              onChange={handleSelect}
              dataTestId="select"
            />
          )}

          {sizes && (
            <Select
              options={sizesOptions!}
              placeholder="Размер"
              name="size"
              onChange={handleSelect}
              selected={selected.size}
              dataTestId="select"
            />
          )}

          {stickerNumbers && (
            <Select
              options={stickersOptions!}
              placeholder="Стикер"
              name="stickerNumber"
              onChange={handleSelect}
              selected={selected.stickerNumber}
              dataTestId="select"
            />
          )}
        </Space>

        <Button
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
