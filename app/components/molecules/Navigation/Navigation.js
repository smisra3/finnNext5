import React from 'react';
import { PureComponent } from 'react';

import Link from 'next/link';
import Image from '../../atoms/Image';
import Anchor from '../../atoms/Anchor';
import { specialcharacter } from '../../../locales/en-US';

import styled from 'styled-components';
import styles from './Navigation.style';
import '../../../styles/index';

class Navigation extends PureComponent<Props> {

  render() {
    const { className, NavigationText, sideMenu } = this.props;
    return (
      <nav className={`${className}`}>
        {/* humburder menu button */}
        {NavigationText &&
          <div onClick={this.props.openSideNav}>
            <button type="button" className={` btn-hamburger ${sideMenu ? 'cross-icon change' : ''}`}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </button>
          </div>
        }

        {/* sideBar menu container */}
        <div className={` row navigation-links collapse ${sideMenu ? 'sidenav slide-menu-in' : 'slide-menu-out'}`}>
          <div className="slide-header between-lg">
          </div>
          {/* navigation links used for both desktop amd mobile */}
          <ul className="row">
            {NavigationText && NavigationText.map((item, idx) => (
              <Anchor
                to={item.url}
              >
                <li key={idx} className={item.name}>
                  {item.name}
                  <span />
                  {/* <span>{specialcharacter.forwardslash}</span> */}
                </li>
              </Anchor>
            ))}
          </ul>
        </div>
        {/* end sideBar menu container */}
      </nav>
    );
  }
}

export default styled(Navigation)`
  ${styles};
`;
export { Navigation as NavigationVanilla };
