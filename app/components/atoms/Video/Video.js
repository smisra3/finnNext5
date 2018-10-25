import type, { Node } from 'react';
import styled from 'styled-components';
import styles from './Video.style';
// import type, { Props } from './types';

const Video = ({
  controls,
  src,
  children,
  settings
}) => {
  const { width, height, autoplay } = settings;
  return <video
    src={src}
    controls={controls}
    width={width}
    height={height}
    autoplay={autoplay}
  >
    {children}
  </video>;
};

Video.defaultProps = {
  src: '',
  width: '',
  height: '',
  width: '',
  children: `Your browser doesn't support HTML5 Video tag.`
};

export default styled(Video)`${styles}`;

export { Video };
