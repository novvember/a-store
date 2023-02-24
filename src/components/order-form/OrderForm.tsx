import { Space } from '@alfalab/core-components/space';
import { Input } from '@alfalab/core-components/input';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Tag } from '@alfalab/core-components/tag';
import { Amount } from '@alfalab/core-components/amount';

import { NavigationProfileMIcon } from '@alfalab/icons-glyph/NavigationProfileMIcon';
import { MailMIcon } from '@alfalab/icons-glyph/MailMIcon';
import { PhoneMIcon } from '@alfalab/icons-glyph/PhoneMIcon';
import { HousesMIcon } from '@alfalab/icons-glyph/HousesMIcon';
import { Typography } from '@alfalab/core-components/typography';

const ICON_COLOR = '#aaa';

function OrderForm() {
  return (
    <form>
      <Space direction="vertical" fullWidth size="l">
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
            rightAddons={
              <Amount
                value={350}
                currency="RUR"
                minority={1}
              />
            }
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
      </Space>
    </form>
  );
}

export default OrderForm;
