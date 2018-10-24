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
    const { className, NavigationText, mainHeader } = this.props;
    let buttonMarkUp, sideNavMenu;
    console.log('mainHeader', mainHeader);

    const openNav = (e) => {
      const body = document.body;
      const headerMarkup = document.getElementById('main-header');

      if (buttonMarkUp.classList.contains('cross-icon')) {
        buttonMarkUp.classList.remove('cross-icon');

        body.style.backgroundColor = 'rgba(255,255,255, 0.9)';
        body.style.overflow = 'scroll';

        document.getElementById('main-header').style.cssText = null;

        sideNavMenu.classList.add('slide-menu-out');
        sideNavMenu.style.cssText = null;
        sideNavMenu.classList.remove('sidenav', 'slide-menu-in');
        document.getElementsByClassName('btn-hamburger')[0].classList.remove("change");
        headerMarkup.classList.remove('sticky');
      } else {
        body.style.backgroundColor = 'rgba(0,0,0,0.4)';
        body.style.overflow = 'hidden';

        document.getElementsByClassName('btn-hamburger')[0].classList.add("change");

        headerMarkup.classList.add('sticky');


        // sidenav styling
        sideNavMenu.style.width = '80%';
        sideNavMenu.classList.remove('slide-menu-out');
        sideNavMenu.classList.add('sidenav', 'slide-menu-in');

        buttonMarkUp.classList.add('cross-icon');
      }
    };

    return (
      <nav className={`${className}`}>
        {/* humburder menu button */}
        {NavigationText &&
          <div onClick={openNav}>
            <button type="button" className="btn-hamburger" id="btn-hamburger" ref={elem => buttonMarkUp = elem} >
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </button>
          </div>
        }

        {/* sideBar menu container */}
        <div className="row navigation-links collapse" id="sidenav-menu" ref={elem => sideNavMenu = elem}>
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
