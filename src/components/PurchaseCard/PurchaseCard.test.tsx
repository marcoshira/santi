import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { PurchaseCard } from '.';
import { PurchaseCardProps } from '../../shared-types/shared-types';

const props: PurchaseCardProps = {
  title: 'any',
};

describe('<PurchaseCard />', () => {
  it('should render', () => {
    renderTheme(<PurchaseCard {...props} />);

    expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
  });
});
