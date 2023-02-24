import { Space } from '@alfalab/core-components/space';
import { Input } from '@alfalab/core-components/input';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Tag } from '@alfalab/core-components/tag';
import { Amount } from '@alfalab/core-components/amount';
import { Textarea } from '@alfalab/core-components/textarea';

import { NavigationProfileMIcon } from '@alfalab/icons-glyph/NavigationProfileMIcon';
import { MailMIcon } from '@alfalab/icons-glyph/MailMIcon';
import { PhoneMIcon } from '@alfalab/icons-glyph/PhoneMIcon';
import { HousesMIcon } from '@alfalab/icons-glyph/HousesMIcon';
import { Typography } from '@alfalab/core-components/typography';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { GiftBoxMIcon } from '@alfalab/icons-glyph/GiftBoxMIcon';
import { CreditCardMIcon } from '@alfalab/icons-glyph/CreditCardMIcon';
import { Button } from '@alfalab/core-components/button';

const ICON_COLOR = '#aaa';

function OrderForm() {
  return (
    <form>
      <Space direction="vertical" fullWidth size={32}>
        <Input
          label="ФИО"
          name="name"
          block
          type="text"
          leftAddons={<NavigationProfileMIcon color={ICON_COLOR} />}
        />

        <Input
          label="e-mail"
          name="email"
          block
          type="email"
          leftAddons={<MailMIcon color={ICON_COLOR} />}
        />

        <Input
          label="Телефон"
          name="phone"
          block
          type="tel"
          leftAddons={<PhoneMIcon color={ICON_COLOR} />}
        />

        <Input
          label="Адрес"
          name="address"
          block
          hint="Если вы выбрали самовывоз — оставьте поле пустым"
          leftAddons={<HousesMIcon color={ICON_COLOR} />}
        />

        <RadioGroup
          label="Доставка"
          direction="horizontal"
          type="tag"
          name="delivery"
        >
          <Tag
            value="russia"
            size="xs"
            rightAddons={<Amount value={350} currency="RUR" minority={1} />}
          >
            Доставка по России
          </Tag>
          <Tag
            value="coutier"
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

        <Input
          label="Промокод"
          name="promo"
          block
          leftAddons={<GiftBoxMIcon color={ICON_COLOR} />}
        />

        <Checkbox label="Согласен с политикой конфиденциальности и обработки персональных данных" />

        <Textarea label="Комментарий к заказку" name="text" block />

        <RadioGroup
          label="Способ оплаты"
          hint="Выберите способ оплаты „Промокод“, если ваш заказ не превышает сумму промокода. Если больше — выберите оплату картой"
          direction="horizontal"
          type="tag"
          name="payment"
        >
          <Tag value="card" size="xs" leftAddons={<CreditCardMIcon />}>
            Банковская карта
          </Tag>
          <Tag value="promo" size="xs" leftAddons={<GiftBoxMIcon />}>
            Промокод
          </Tag>
        </RadioGroup>

        <Button view="primary">Продолжить оформление</Button>
      </Space>
    </form>
  );
}

export default OrderForm;
