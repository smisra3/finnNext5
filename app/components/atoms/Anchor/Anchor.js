// @flow
import Link from 'next/link';
import type { Node } from 'react';
import { PureComponent } from 'react';
import styled from 'styled-components';

import styles from './Anchor.style';
import { buildUrl } from '../../../utils/utils';

type Props = {
  to: string | any,
  as?: string,
  children: Node,
  noLink?: boolean,
  className: '',
  inheritedStyles?: string,
  handleLinkClick: (SyntheticEvent<>) => void,
  shallow?: boolean,
  scroll?: boolean,
  forceClick?: boolean,
};

class Anchor extends PureComponent<Props> {
  /* eslint-disable */
  render() {
    const {
      children,
      to,
      as,
      className,
      noLink,
      inheritedStyles,
      handleLinkClick,
      shallow,
      scroll,
      forceClick,
      ...other
    } = this.props;

    return noLink ? (
      <a href={buildUrl(to)} className={className} onClick={handleLinkClick} {...other}>
        {children}
      </a>
    ) : (
      <Link href={to} as={as} shallow={shallow} scroll={scroll}>
        {
          forceClick ?
            <div>
              <a className={className} onClick={handleLinkClick} {...other}>
                {children}
              </a>
            </div>
            :
            <a className={className} {...other}>
              {children}
            </a>
        }
      </Link>
    );
  }
}

Anchor.defaultProps = {
  noLink: false,
  to: '',
  as: '',
  inheritedStyles: '',
  shallow: false,
  scroll: false,
  forceClick: false,
  handleLinkClick: 'function'
};

export default styled(Anchor)`${styles}`;

export { Anchor as AnchorVanilla };
