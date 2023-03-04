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
import { Checkbox } from '@alfalab/core-components/checkbox';
import { GiftBoxMIcon } from '@alfalab/icons-glyph/GiftBoxMIcon';
import { CreditCardMIcon } from '@alfalab/icons-glyph/CreditCardMIcon';
import { Button } from '@alfalab/core-components/button';
import { Alert } from '@alfalab/core-components/alert';
import { Toast } from '@alfalab/core-components/toast';

import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '../../store';
import { cartCleared, selectTotalCartCost } from '../../store/cartSlice';
import PromocodeInput from '../promocode-input/PromocodeInput';
import usePostOrderRequest from '../../api/usePostOrderRequest';
import { useEffect, useRef, useState } from 'react';

const ICON_COLOR = '#aaa';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  deliveryType: 'russia' | 'courier' | 'pickup';
  address: string;
  comment: string;
  paymentType: 'card' | 'promocode';
  promocode: string;
  isAgreed: boolean;
};

const defaultValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  deliveryType: 'russia',
  address: '',
  comment: '',
  paymentType: 'card',
  promocode: '',
  isAgreed: false,
};

const schema = yup
  .object({
    name: yup.string().required('Введите имя'),
    email: yup
      .string()
      .email('Неверный формат электронной почты')
      .required('Введите адрес электронной почты для связи'),
    phone: yup
      .string()
      .trim()
      .matches(/\+7\s\d{3}\s\d{3}-\d{2}-\d{2}/, 'Неверный номер телефона')
      .required('Введите номер мобильного телефона для связи'),
    deliveryType: yup
      .string()
      .oneOf(['russia', 'courier', 'pickup'])
      .required(),
    address: yup.string().when('deliveryType', {
      is: (value: string) => ['russia', 'courier'].includes(value),
      then: (schema) =>
        schema.required('Введите адрес, по которому доставим товары'),
    }),
    comment: yup.string(),
    paymentType: yup.string().oneOf(['card', 'promocode']).required(),
    promocode: yup.string().when('paymentType', {
      is: 'promocode',
      then: (schema) =>
        schema.required('Введите промокод или выберите другой способ оплаты'),
    }),
    isAgreed: yup
      .boolean()
      .oneOf([true], 'Для оформления заказа необходимо согласие'),
  })
  .required();

const extraCosts: Record<string, number> = {
  russia: 350,
  courier: 300,
  pickup: 0,
};

function OrderForm() {
  const dispatch = useAppDispatch();

  const { control, handleSubmit, watch } = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const totalCost = useAppSelector(selectTotalCartCost);

  const { postOrder, response, isLoading, error } = usePostOrderRequest();

  const [isToastOpened, setIsToastOpened] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  const onSubmit = (data: FormValues) => {
    postOrder(data);
  };

  useEffect(() => {
    if (response) {
      dispatch(cartCleared());
      setIsToastOpened(true);
    } else if (!!error) {
      setIsToastOpened(true);
    }
  }, [dispatch, error, response]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Space direction="vertical" fullWidth size={32}>
        {/* ФИО */}
        <Controller
          name="name"
          control={control}
          render={({
            field: { onChange, value, name },
            fieldState: { error },
          }) => (
            <Input
              label="ФИО"
              block
              type="text"
              leftAddons={<NavigationProfileMIcon color={ICON_COLOR} />}
              name={name}
              value={value}
              onChange={onChange}
              error={error?.message}
            />
          )}
        />

        {/* E-mail */}
        <Controller
          name="email"
          control={control}
          render={({
            field: { onChange, value, name },
            fieldState: { error },
          }) => (
            <Input
              label="E-mail"
              block
              type="text"
              leftAddons={<MailMIcon color={ICON_COLOR} />}
              name={name}
              value={value}
              onChange={onChange}
              error={error?.message}
            />
          )}
        />

        {/* Phone */}
        <Controller
          name="phone"
          control={control}
          render={({
            field: { onChange, value, name },
            fieldState: { error },
          }) => (
            <PhoneInput
              label="Телефон"
              block
              leftAddons={<PhoneMIcon color={ICON_COLOR} />}
              name={name}
              value={value}
              onChange={onChange}
              error={error?.message}
            />
          )}
        />

        {/* deliveryType */}
        <Controller
          name="deliveryType"
          control={control}
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
                rightAddons={
                  <Amount
                    value={extraCosts.russia}
                    currency="RUR"
                    minority={1}
                  />
                }
              >
                Доставка по России
              </Tag>
              <Tag
                value="courier"
                size="xs"
                rightAddons={
                  <Amount
                    value={extraCosts.courier}
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
                  <Amount
                    value={extraCosts.pickup}
                    currency="RUR"
                    minority={1}
                  />
                }
              >
                Самовывоз
              </Tag>
            </RadioGroup>
          )}
        />

        {watch('deliveryType') === 'pickup' && (
          <Alert title="Адрес для самовывоза">
            пр-т Андропова, 18, корп. 3, Москва
          </Alert>
        )}

        {/* Address */}
        {(watch('deliveryType') === 'russia' ||
          watch('deliveryType') === 'courier') && (
          <Controller
            name="address"
            control={control}
            render={({
              field: { onChange, value, name },
              fieldState: { error },
            }) => (
              <Input
                label="Адрес"
                block
                leftAddons={<HousesMIcon color={ICON_COLOR} />}
                name={name}
                value={value}
                onChange={onChange}
                error={error?.message}
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
              minRows={3}
              name={name}
              value={value}
              onChange={onChange}
              error={invalid}
            />
          )}
        />

        {/* paymentType */}
        <Controller
          name="paymentType"
          control={control}
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
              <Tag value="promocode" size="xs" leftAddons={<GiftBoxMIcon />}>
                Промокод
              </Tag>
            </RadioGroup>
          )}
        />

        {/* Promo */}
        {watch('paymentType') === 'promocode' && (
          <Controller
            name="promocode"
            control={control}
            render={({
              field: { onChange, value, name },
              fieldState: { error },
            }) => (
              <PromocodeInput
                name={name}
                value={value}
                onChange={onChange}
                errorMessage={error?.message}
              />
            )}
          />
        )}

        {/*isAgreed */}
        <Controller
          name="isAgreed"
          control={control}
          render={({
            field: { onChange, value, name },
            fieldState: { error },
          }) => (
            <Checkbox
              label="Согласен с политикой конфиденциальности и обработки персональных данных"
              name={name}
              checked={value}
              error={error?.message}
              onChange={(_, payload) => onChange(payload?.checked)}
            />
          )}
        />

        <Toast
          open={isToastOpened}
          anchorElement={button.current}
          position="right"
          offset={[0, 8]}
          badge={response ? 'positive' : 'negative'}
          title={response ? 'Готово!' : error}
          hasCloser={false}
          block={false}
          onClose={() => {
            setIsToastOpened(false);
          }}
          autoCloseDelay={3000}
        />

        <Button
          ref={button}
          view="primary"
          type="submit"
          loading={isLoading}
          rightAddons={
            <Amount
              value={totalCost + extraCosts[watch('deliveryType')]}
              currency="RUR"
              minority={1}
            />
          }
        >
          Оформить заказ
        </Button>
      </Space>
    </form>
  );
}

export default OrderForm;
