import { Space } from '@alfalab/core-components/space';
import { Input } from '@alfalab/core-components/input';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Tag } from '@alfalab/core-components/tag';
import { Amount } from '@alfalab/core-components/amount';
import { Textarea } from '@alfalab/core-components/textarea';
import { PhoneInput } from '@alfalab/core-components/phone-input';

import { NavigationProfileMIcon } from '@alfalab/icons-glyph/NavigationProfileMIcon';
import { MailMIcon } from '@alfalab/icons-glyph/MailMIcon';
import { PhoneMIcon } from '@alfalab/icons-glyph/PhoneMIcon';
import { HousesMIcon } from '@alfalab/icons-glyph/HousesMIcon';
import { Typography } from '@alfalab/core-components/typography';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { GiftBoxMIcon } from '@alfalab/icons-glyph/GiftBoxMIcon';
import { CreditCardMIcon } from '@alfalab/icons-glyph/CreditCardMIcon';
import { Button } from '@alfalab/core-components/button';
import { ChangeEvent, useState } from 'react';

const ICON_COLOR = '#aaa';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  delivery: 'russia' | 'courier' | 'pickup';
  promo: string;
  isAgreed: boolean;
  comment: string;
  payment: 'card' | 'promo';
};

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  address: '',
  delivery: 'russia',
  promo: '',
  isAgreed: false,
  comment: '',
  payment: 'card',
};

type FormErrors = Record<keyof FormValues, boolean | undefined>;

const initialErrors: FormErrors = {
  name: undefined,
  email: undefined,
  phone: undefined,
  address: undefined,
  delivery: undefined,
  promo: undefined,
  isAgreed: undefined,
  comment: undefined,
  payment: undefined,
};

function OrderForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>(initialErrors);

  const handleChangeInput = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    payload: { value: string },
  ) => {
    const name = event.target.name;
  };

  const handleChangeRadioGroup = (
    event?:
      | ChangeEvent<Element>
      | React.MouseEvent<Element, MouseEvent>
      | undefined,
    payload?:
      | {
          value: string;
          name?: string | undefined;
        }
      | undefined,
  ) => {
    const name = payload?.name;
  };

  const handleChangeCheckbox = (
    event?: ChangeEvent<HTMLInputElement> | undefined,
    payload?: { checked: boolean; name?: string | undefined } | undefined,
  ) => {
    const name = payload?.name;
  };

  const handleSubmit = () => {
    console.log('submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Space direction="vertical" fullWidth size={32}>
        <Input
          label="ФИО"
          name="name"
          block
          type="text"
          leftAddons={<NavigationProfileMIcon color={ICON_COLOR} />}
          value={values.name}
          error={errors.name}
          onChange={handleChangeInput}
        />

        <Input
          label="E-mail"
          name="email"
          block
          type="email"
          leftAddons={<MailMIcon color={ICON_COLOR} />}
          value={values.email}
          error={errors.email}
          onChange={handleChangeInput}
        />

        <PhoneInput
          label="Телефон"
          name="phone"
          block
          leftAddons={<PhoneMIcon color={ICON_COLOR} />}
          value={values.phone}
          error={errors.phone}
          onChange={handleChangeInput}
        />

        <RadioGroup
          label="Доставка"
          direction="horizontal"
          type="tag"
          name="delivery"
          value={values.delivery}
          error={errors.delivery}
          onChange={handleChangeRadioGroup}
        >
          <Tag
            value="russia"
            size="xs"
            rightAddons={<Amount value={350} currency="RUR" minority={1} />}
          >
            Доставка по России
          </Tag>
          <Tag
            value="courier"
            size="xs"
            rightAddons={
              <Amount
                view="withZeroMinorPart"
                value={300}
                currency="RUR"
                minority={1}
              />
            }
          >
            Курьером по Москве
          </Tag>
          <Tag
            value="pickup"
            size="xs"
            rightAddons={
              <Typography.Text view="secondary-small">
                (пр-т Андропова, 18, корп. 3)
              </Typography.Text>
            }
          >
            Самовывоз
          </Tag>
        </RadioGroup>

        {(values.delivery === 'russia' || values.delivery === 'courier') && (
          <Input
            label="Адрес"
            name="address"
            block
            leftAddons={<HousesMIcon color={ICON_COLOR} />}
            value={values.address}
            error={errors.address}
            onChange={handleChangeInput}
          />
        )}

        <Textarea
          label="Комментарий к заказу"
          name="comment"
          block
          value={values.comment}
          error={errors.comment}
          onChange={handleChangeInput}
        />

        <RadioGroup
          label="Способ оплаты"
          hint="Выберите способ оплаты „Промокод“, если ваш заказ не превышает сумму промокода. Если больше — выберите оплату картой"
          direction="horizontal"
          type="tag"
          name="payment"
          value={values.payment}
          error={errors.payment}
          onChange={handleChangeRadioGroup}
        >
          <Tag value="card" size="xs" leftAddons={<CreditCardMIcon />}>
            Банковская карта
          </Tag>
          <Tag value="promo" size="xs" leftAddons={<GiftBoxMIcon />}>
            Промокод
          </Tag>
        </RadioGroup>

        {values.payment === 'promo' && (
          <Input
            label="Промокод"
            name="promo"
            block
            leftAddons={<GiftBoxMIcon color={ICON_COLOR} />}
            value={values.promo}
            error={errors.promo}
            onChange={handleChangeInput}
          />
        )}

        <Checkbox
          label="Согласен с политикой конфиденциальности и обработки персональных данных"
          checked={values.isAgreed}
          error={errors.isAgreed}
          onChange={handleChangeCheckbox}
        />
        <Button view="primary">Продолжить оформление</Button>
      </Space>
    </form>
  );
}

export default OrderForm;
