import type, { Node } from 'react';
import styled from 'styled-components';

import styles from './Picture.style';

type Props = {
  large: string,
  medium: string,
  alt: string,
  className: string,
}

const Picture = ({
  large,
  medium,
  alt,
  className,
  ...others,
}: Props): Node => {
  return <picture className={className} {...others}>
    <source srcSet={large} media="(min-width: 1024px)" />
    <source srcSet={medium} media="(max-width: 1023px)" />
    <img src={medium} alt={alt} />
  </picture>
};

Picture.defaultProps = {
  large: '',
  medium: '',
  alt: 'fallback image',
  className: '',
};

export default styled(Picture)`${styles}`;

export { Picture };
