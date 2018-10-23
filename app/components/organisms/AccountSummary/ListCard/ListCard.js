// @flow
import React from 'react';
import styled from 'styled-components';
import styles from './ListCard.style';
import Button from '../../../atoms/Button';

type Props = {
  title: string,
  displayAmount: string,
  className: string,
}

const ListCard = ({ title, displayAmount, className }: Props) => (
  <Button className={className}>
    <h3 className="title">{title}</h3>
    <p>{displayAmount}</p>
  </Button>
);

export default styled(ListCard)`${styles}`;
export { ListCard as ListCardVanilla };
