import { render, screen } from '@testing-library/react';

import SectionHeader from './SectionHeader';

const TITLE = 'Test title';
const SUBTITLE = 'Test subtitle';
const TYPE = 'primary';

describe('SectionHeader component', () => {
  it('should render properly', async () => {
    render(<SectionHeader title={TITLE} subtitle={SUBTITLE} type={TYPE} />);

    const title = await screen.findByTestId('section-title');
    const subtitle = await screen.findByTestId('section-subtitle');

    expect(title.textContent).toBe(TITLE);
    expect(subtitle.textContent).toBe(SUBTITLE);
  });
});
