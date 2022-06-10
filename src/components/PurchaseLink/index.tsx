import { PurchaseAttributesProps } from '../../shared-types/shared-types';
import { Heading } from '../Heading';
import { InputProps } from '../ProductPage';
import { PurchaseCard } from '../PurchaseCard';
import * as Styled from './styles';

export const PurchaseLink = ({
  Item,
  onPurchase,
}: PurchaseAttributesProps & InputProps) => {
  return (
    <Styled.Wrapper>
      <Heading size="medium">Purchases</Heading>
      {Item.length > 0 ? (
        Item.map((purch) => (
          <PurchaseCard key={purch.id} onPurchase={onPurchase} {...purch} />
        ))
      ) : (
        <p>No Purchases Yet</p>
      )}
    </Styled.Wrapper>
  );
};
