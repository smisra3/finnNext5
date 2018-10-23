// @flow
import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

import styled from 'styled-components';
import { brandLogoImage, AntonymousHeaderInfo } from './footer.static.data';

import styles from './Footer.style';
import Anchor from '../../atoms/Anchor';
import Image from '../../atoms/Image';

const Footer = ({ className, footer }: Props): Node => {
  return (
  <footer className={`row center-xs middle-xs ${className}`}>
    <Image {...brandLogoImage} />
    <ul>
      {footer.map((item, idx) => (
        <Anchor
          to="#content-wrapper"
        >
          <li key={idx} className={item.name}>
            {item.name}
          </li>
        </Anchor>
        ))}
    </ul>
  </footer>
  )
};

const mapStateToProps = state => ({
  footer: get(state, ['global', 'globalData', 'footer']),
});

export default connect(mapStateToProps)(styled(Footer)`
  ${styles};
`);

export { Footer };
