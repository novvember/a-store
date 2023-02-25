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

import { useForm, Controller } from 'react-hook-form';

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

const defaultValues: FormValues = {
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

function OrderForm() {
  const { control, handleSubmit, watch } = useForm({
    defaultValues,
  });

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Space direction="vertical" fullWidth size={32}>
        {/* ФИО */}
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, value, name },
            fieldState: { invalid },
          }) => (
            <Input
              label="ФИО"
              block
              type="text"
              leftAddons={<NavigationProfileMIcon color={ICON_COLOR} />}
              name={name}
              value={value}
              onChange={onChange}
              error={invalid}
            />
          )}
        />

        {/* E-mail */}
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, value, name },
            fieldState: { invalid },
          }) => (
            <Input
              label="E-mail"
              block
              type="text"
              leftAddons={<MailMIcon color={ICON_COLOR} />}
              name={name}
              value={value}
              onChange={onChange}
              error={invalid}
            />
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, value, name },
            fieldState: { invalid },
          }) => (
            <PhoneInput
              label="Телефон"
              block
              leftAddons={<PhoneMIcon color={ICON_COLOR} />}
              name={name}
              value={value}
              onChange={onChange}
              error={invalid}
            />
          )}
        />

        {/* Delivery */}
        <Controller
          name="delivery"
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, value, name },
            fieldState: { invalid },
          }) => (
            <RadioGroup
              label="Доставка"
              direction="horizontal"
              type="tag"
              name={name}
              value={value}
              onChange={(_, payload) => onChange(payload?.value)}
              error={invalid}
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
          )}
        />

        {/* Address */}
        {(watch('delivery') === 'russia' ||
          watch('delivery') === 'courier') && (
          <Controller
            name="address"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, value, name },
              fieldState: { invalid },
            }) => (
              <Input
                label="Адрес"
                block
                leftAddons={<HousesMIcon color={ICON_COLOR} />}
                name={name}
                value={value}
                onChange={onChange}
                error={invalid}
              />
            )}
          />
        )}

        {/* Cooment */}
        <Controller
          name="comment"
          control={control}
          render={({
            field: { onChange, value, name },
            fieldState: { invalid },
          }) => (
            <Textarea
              label="Комментарий к заказу"
              block
              name={name}
              value={value}
              onChange={onChange}
              error={invalid}
            />
          )}
        />

        {/* Payment */}
        <Controller
          name="payment"
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, value, name },
            fieldState: { invalid },
          }) => (
            <RadioGroup
              label="Способ оплаты"
              hint="Выберите способ оплаты „Промокод“, если ваш заказ не превышает сумму промокода. Если больше — выберите оплату картой"
              direction="horizontal"
              type="tag"
              name={name}
              value={value}
              error={invalid}
              onChange={(_, payload) => onChange(payload?.value)}
            >
              <Tag value="card" size="xs" leftAddons={<CreditCardMIcon />}>
                Банковская карта
              </Tag>
              <Tag value="promo" size="xs" leftAddons={<GiftBoxMIcon />}>
                Промокод
              </Tag>
            </RadioGroup>
          )}
        />

        {/* Promo */}
        {watch('payment') === 'promo' && (
          <Controller
            name="promo"
            control={control}
            rules={{ required: true }}
            render={({
              field: { onChange, value, name },
              fieldState: { invalid },
            }) => (
              <Input
                label="Промокод"
                block
                leftAddons={<GiftBoxMIcon color={ICON_COLOR} />}
                name={name}
                value={value}
                onChange={onChange}
                error={invalid}
              />
            )}
          />
        )}

        {/*isAgreed */}
        <Controller
          name="isAgreed"
          control={control}
          rules={{ required: true }}
          render={({
            field: { onChange, value, name },
            fieldState: { invalid },
          }) => (
            <Checkbox
              label="Согласен с политикой конфиденциальности и обработки персональных данных"
              name={name}
              checked={value}
              error={invalid && 'Для оформления заказа необходимо согласие'}
              onChange={(_, payload) => onChange(payload?.checked)}
            />
          )}
        />

        <Button view="primary" type="submit">
          Продолжить оформление
        </Button>
      </Space>
    </form>
  );
}

export default OrderForm;
