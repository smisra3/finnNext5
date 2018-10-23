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
    const { className, NavigationText } = this.props;

    const openNav = (e) => {
      const body = document.body;
      const crossElm = document.getElementById('btn-hamburger');
      const elem = document.getElementById('sidenav-menu');
      if (crossElm.classList.contains('cross-icon')) {
        crossElm.classList.remove('cross-icon');

        body.style.backgroundColor = 'rgba(255,255,255, 0.9)';
        body.style.overflow = 'scroll';

        document.getElementById('main-header').style.cssText = null;

        elem.classList.add('slide-menu-out');
        elem.style.cssText = null;
        elem.classList.remove('sidenav', 'slide-menu-in');
      } else {
        body.style.backgroundColor = 'rgba(0,0,0,0.4)';
        body.style.overflow = 'hidden';

        document.getElementsByClassName('btn-hamburger')[0].classList.add("change");
        const headerMarkup = document.getElementById('main-header');
        headerMarkup.classList.add('sticky');


        // sidenav styling
        elem.style.width = '80%';
        elem.classList.remove('slide-menu-out');
        elem.classList.add('sidenav', 'slide-menu-in');

        crossElm.classList.add('cross-icon');
      }
    };

    return (
      <nav className={`${className}`}>
        {/* humburder menu button */}
        {NavigationText &&
          <div onClick={openNav}>
            <button type="button" className="btn-hamburger" id="btn-hamburger">
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </button>
          </div>
        }

        {/* sideBar menu container */}
        <div className="row navigation-links collapse" id="sidenav-menu">
          <div className="slide-header between-lg">
          </div>
          {/* navigation links used for both desktop amd mobile */}
          <ul className="row">
            {NavigationText && NavigationText.map((item, idx) => (
              <Anchor
                to="#content-wrapper"
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
