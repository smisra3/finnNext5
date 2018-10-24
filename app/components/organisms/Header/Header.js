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
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const headerMarkup = this.mainHeader.current;
    const sticky = headerMarkup.offsetTop;

    if (window.pageYOffset > sticky) {
      headerMarkup.classList.add('sticky');
    } else {
      headerMarkup.classList.remove('sticky');
    }
  }

  render() {
    const { className } = this.props;
    return (
      <header className={`main-header ${className}`} id="main-header" ref={this.mainHeader}>
        <div className="container-fluid">
          <div className="row middle-xs between-xs header-content">
            {/* main logo */}
            <div className="brand-logo first-lg">
              <Anchor to="#content-wrapper" >
                {brandLogoImage && <Image {...brandLogoImage} />}
              </Anchor>
            </div>
            {/* end main logo */}

            {/* navigation links and hamburger */}
            {NavigationText &&
              <div className="first-xs">
                <Nav NavigationText={this.props.header} brandLogoImage={brandLogoImage} mainHeader={this.mainHeader} />
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
