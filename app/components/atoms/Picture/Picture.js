import type, { Node } from 'react';
import styled from 'styled-components';
import styles from './Picture.style';
// import type, { Props } from './types';

const Picture = ({
  large,
  medium,
  small,
  alt
}) => {
    return <picture>
      <source srcset={large.url} media="(min-width: 768px)" />
      <source srcset={medium.url} media="(min-width: 600px)" />
      <source srcset={small.url} media="(max-width: 475px)" />
      <img src={small.url} alt={alt}/>
    </picture>
};

Picture.defaultProps = {
};

export default styled(Picture)`${styles}`;

export { Picture };
