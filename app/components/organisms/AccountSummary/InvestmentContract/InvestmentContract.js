// @flow
import type { Node } from 'react';
import styled from 'styled-components';
import styles from './InvestmentContract.style';
import Button from '../../../atoms/Button';

type Props = {
  name: string,
  value: string,
  price: string,
  qty: string,
  cta: string,
  className: string,
}

const InvestmentContract = ({
  name, price, qty, value, cta, className,
}: Props) => (
  <div className={`${className} row`}>
    <div className="col-xs-4 name">{name}</div>
    <div className="col-xs-2">{price}</div>
    <div className="col-xs-2">{qty}</div>
    <div className="col-xs-2 value">{value}</div>
    <div className="col-xs-1 cta">
      <Button primary>{cta}</Button>
    </div>
  </div>
);

export default styled(InvestmentContract)`${styles}`;
