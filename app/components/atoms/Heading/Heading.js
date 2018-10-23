// @flow
import type { Node } from 'react';
import styles from './Heading.style';
import styled from 'styled-components';

type Props = {
  children: Node,
  className: string,
  type?: string,
  inheritedStyles?: string,
};

const Heading = ({
  children, className, type, inheritedStyles, ...others
}: Props): Node => (
  <h1 className={className} {...others}>
    {children}
  </h1>
);

Heading.defaultProps = {
  inheritedStyles: '',
  type: 'h3',
};

export default styled(Heading)`${styles}`;
