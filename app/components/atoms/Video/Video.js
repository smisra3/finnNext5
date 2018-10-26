import type, { Node } from 'react';
import styled from 'styled-components';

import styles from './Video.style';

type Props = {
  controls?: boolean,
  src: string,
  children: Node,
  settings: object,
};

const Video = ({
  controls,
  src,
  children,
  settings,
  ...others,
}: Props): Node => {
  const { width, height, autoplay } = settings;
  return <video
    src={src}
    controls={controls}
    width={width}
    height={height}
    autoplay={autoplay}
    {...others}
  >
    {children}
  </video>;
};

Video.defaultProps = {
  src: '',
  children: `Your browser doesn't support HTML5 Video tag.`,
  settings: {
    width: '100%',
    height: '100%',
    autoplay: true,
  }
};

export default styled(Video)`${styles}`;

export { Video };
