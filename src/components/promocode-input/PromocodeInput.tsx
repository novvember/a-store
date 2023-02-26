import { Input } from '@alfalab/core-components/input';
import { Space } from '@alfalab/core-components/space';
import { Button } from '@alfalab/core-components/button';
import { useEffect, useState } from 'react';
import { GiftBoxMIcon } from '@alfalab/icons-glyph/GiftBoxMIcon';

type PromocodeInputProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  errorMessage?: string;
};

const ICON_COLOR = '#aaa';

function PromocodeInput({
  name,
  value,
  onChange,
  errorMessage,
}: PromocodeInputProps) {
  const [currentValue, setCurrentValue] = useState(value);

  const [mode, setMode] = useState<'idle' | 'saved' | 'error' | 'loading'>(
    'idle',
  );
  const [buttonLabel, setButtonLabel] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(errorMessage ?? '');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (mode === 'idle') {
      setButtonLabel('Применить');
      setIsLoading(false);
      setIsSuccess(false);
      setError('');
      setMessage('');
    } else if (mode === 'error') {
      setButtonLabel('Применить');
      setIsLoading(false);
      setIsSuccess(false);
      setError('Не получилось применить промокод');
      setMessage('');
    } else if (mode === 'saved') {
      setButtonLabel('Удалить');
      setIsLoading(false);
      setIsSuccess(true);
      setError('');
    } else if (mode === 'loading') {
      setButtonLabel('Применить');
      setIsLoading(true);
      setIsSuccess(false);
      setError('');
      setMessage('');
    }
  }, [mode]);

  useEffect(() => {
    if (errorMessage) {
      setError(errorMessage);
    }
  }, [errorMessage]);

  const handleChange = (_: unknown, { value }: { value: string }) => {
    setCurrentValue(value);
    setError('');
  };

  const handleSubmit = () => {
    if (mode === 'saved') {
      handleClear();
    } else {
      handleSave();
    }
  };

  const handleSave = () => {
    if (currentValue.length < 1) {
      return;
    }

    setMode('loading');

    try {
      console.log('promocode sent');
      onChange(currentValue);
      setMode('saved');
      setMessage('Скидка 300 ₽');
    } catch {
      setMode('error');
    }
  };

  const handleClear = () => {
    setCurrentValue('');
    onChange('');
    setMode('idle');
  };

  return (
    <Space direction="horizontal" fullWidth align="center">
      <Input
        label="Промокод"
        type="text"
        name={name}
        block
        success={isSuccess}
        onChange={handleChange}
        disabled={isLoading || isSuccess}
        error={error}
        value={currentValue}
        hint={message}
        leftAddons={<GiftBoxMIcon color={ICON_COLOR} />}
        rightAddons={
          <Button
            view="secondary"
            size="xs"
            loading={isLoading}
            onClick={handleSubmit}
          >
            {buttonLabel}
          </Button>
        }
      />
    </Space>
  );
}

export default PromocodeInput;
