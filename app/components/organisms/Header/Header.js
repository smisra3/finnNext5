// @flow
import { Fragment, Component } from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

import type { Props } from './types';
import styled from 'styled-components';
import Link from 'next/link';
import Nav from './../../molecules/Navigation';

import styles from './Header.style';
import Anchor from '../../atoms/Anchor';
import Image from '../../atoms/Image';
import { LOGIN } from '../../../routes';
import { skipNavigation } from '../../../locales/en-US';
import { brandLogoImage, AntonymousHeaderInfo, NavigationText, css } from './header.static.data';
import '../../../styles/index';

const skipNavigationHandler = (e: SyntheticEvent<>) => {
  e.preventDefault();
  const wrapper = document.getElementById('content-wrapper');
  wrapper.focus();
};

// const Header = ({ className }: Props): Node => (
//   <div className={className}>
//     <header id="main-header">
//       <div className="skip-nav">
//         <Anchor
//           to="#content-wrapper"
//           noLink
//           handleLinkClick={e => skipNavigationHandler(e)}
//           navigateTo="content-wrapper"
//         >
//           {skipNavigation}
//         </Anchor>
//       </div>
//       <div className="content-width">
//       <div className="row middle-xs between-xs header-content">
//           <Link href={LOGIN}>
//             <a className="brand-logo col-xs-3 first-lg">
//               <Image {...brandLogoImage} />
//             </a>
//           </Link>
//           <Nav />
//             <Link href={LOGIN}>
//               <a className="brand-logo col-xs-1">
//                 <Image {...brandLogoImage} />
//               </a>
//             </Link>
//         </div>
//       </div>
//       {css.map((cssPath, idx) => {
//         return <link type="text/css" rel="stylesheet" href={cssPath} key={idx} />;
//       })}
//     </header>
//   </div>
// );

class Header extends Component<Props, State> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (event) => {
    const headerMarkup = document.getElementById('main-header');
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
      <header className={`main-header ${className}`} id="main-header">
        <div className="container-fluid">
          <div className="row middle-xs between-xs header-content">
            {/* main logo */}
            <div className="brand-logo first-lg">
              <Anchor to="#content-wrapper" >
                {brandLogoImage && <Image {...brandLogoImage} /> }
              </Anchor>
            </div>
            {/* end main logo */}

            {/* navigation links and hamburger */}
            {NavigationText &&
              <div className="first-xs">
                <Nav NavigationText={NavigationText} brandLogoImage={brandLogoImage} />
              </div>
                }
            {/* end navigation links and hamburger */}

            {/* cart script */}
            <div>
              <div className="cart-logo row end-xs">
                <Image {...brandLogoImage} />
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

export default styled(Header)`
  ${styles};
`;

export { Header as HeaderVanilla };
