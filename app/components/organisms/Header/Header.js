// @flow
import { Fragment, Component } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { connect } from 'react-redux';
import get from 'lodash/get';

import type { Props } from './types';
import styled from 'styled-components';
import Link from 'next/link';
import Nav from './../../molecules/Navigation';

import styles from './Header.style';
import Anchor from '../../atoms/Anchor';
import Image from '../../atoms/Image';
import { LOGIN } from '../../../routes';
import { skipNavigation } from '../../../locales/en-US';
import { brandLogoImage, cartLogoImage, NavigationText, css } from './header.static.data';
import '../../../styles/index';
import { timingSafeEqual } from 'crypto';
// import { get } from 'http';

const skipNavigationHandler = (e: SyntheticEvent<>) => {
  e.preventDefault();
  const wrapper = document.getElementById('content-wrapper');
  wrapper.focus();
};

class Header extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.mainHeader = React.createRef();
    this.headerObserver = React.createRef();
    this.state = {
      sideMenu: false,
      isIntersectionObserver: false
    };
  }

  componentDidMount() {
    this.handleScroll();
  }

  handleScroll = () => {
    const headerMarkup = this.mainHeader.current;
    const headerObserver = this.headerObserver.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.setState({ isIntersectionObserver: false });
        headerMarkup.classList.remove('sticky');
      } else {
        this.setState({ isIntersectionObserver: true });
        headerMarkup.classList.add('sticky');
      }
    });
    observer.observe(headerObserver);
  }

  openNav = (e) => {
    this.setState({ sideMenu: !this.state.sideMenu });
    const body = document.body;
    const { sideMenu } = this.state;

    if (!sideMenu) {
      body.style.backgroundColor = 'rgba(0,0,0,0.4)';
      body.style.overflow = 'hidden';
    } else {
      body.style.backgroundColor = 'rgba(255,255,255, 0.9)';
      body.style.overflow = 'scroll';
    }
  };


  render() {
    const { className } = this.props;
    const { sideMenu, isIntersectionObserver } = this.state;
    return (
      <React.Fragment>
        <div className="header-observer" ref={this.headerObserver} />
        <div className={className}>
          <header className={`main-header ${isIntersectionObserver || sideMenu ? 'sticky' : ''}`} ref={this.mainHeader}>
            <div className="container-fluid">
              <div className="row middle-xs between-xs header-content">
                {/* main logo */}
                <div className="brand-logo first-lg">
                  <Anchor to="/" >
                    {brandLogoImage && <Image {...brandLogoImage} />}
                  </Anchor>
                </div>
                {/* end main logo */}

                {/* navigation links and hamburger */}
                {NavigationText &&
                  <div className="first-xs">
                    <Nav NavigationText={this.props.header} brandLogoImage={brandLogoImage} openSideNav={this.openNav} sideMenu={sideMenu} />
                  </div>
                }
                {/* end navigation links and hamburger */}

                {/* cart script */}
                <div>
                  <div className="cart-logo row end-xs">
                    <Image {...cartLogoImage} />
                  </div>
                </div>
                {/* end cart script */}

              </div>
            </div>
            {css.map((cssPath, idx) => <link type="text/css" rel="stylesheet" href={cssPath} key={idx} />)}
          </header>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  header: get(state, ['global', 'globalData', 'header']),
});

export default connect(mapStateToProps)(styled(Header)`
  ${styles};
`);

export { Header as HeaderVanilla };
