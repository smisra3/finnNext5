// @flow
import { Fragment, Component } from "react";
import Document, { Head, Main, NextScript } from "next/document";

import type { Props } from "./types";
import styled from "styled-components";
import Link from "next/link";

import styles from "./Header.style";
import Anchor from "../../atoms/Anchor";
import Image from "../../atoms/Image";
import { LOGIN } from "../../../routes";
import { skipNavigation } from "../../../locales/en-US";
import { brandLogoImage, AntonymousHeaderInfo, css } from "./header.static.data";
import "../../../styles/index";

import Nav from './../../molecules/Navigation'

const skipNavigationHandler = (e: SyntheticEvent<>) => {
  e.preventDefault();
  const wrapper = document.getElementById("content-wrapper");
  wrapper.focus();
};

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
    // let scrollTop = event.srcElement.body.scrollTop,
    //     itemTranslate = Math.min(0, scrollTop/3 - 60);

    // console.log('scroll', scrollTop, itemTranslate);
    let headerMarkup = document.getElementById("main-header");
    let sticky = headerMarkup.offsetTop;
    if (window.pageYOffset > sticky) {
      headerMarkup.classList.add("sticky");
    } else {
      headerMarkup.classList.remove("sticky");
    }
}

  render(){
    const { className } = this.props;
    return(
      <div className={className}>
        <header id="main-header">
          <div className="skip-nav">
            <Anchor
              to="#content-wrapper"
              noLink
              handleLinkClick={e => skipNavigationHandler(e)}
              navigateTo="content-wrapper"
            >
              {skipNavigation}
            </Anchor>
          </div>
          <div className="content-width">
            <div className="row middle-xs between-xs header-content">
              <Link href={LOGIN}>
                <a className="brand-logo col-xs-3 first-lg">
                  <Image {...brandLogoImage} />
                </a>
              </Link>
              <Nav />
              <Link href={LOGIN}>
                <a className="brand-logo col-xs-1">
                  <Image {...brandLogoImage} />
                </a>
              </Link>
            </div>
          </div>
          {css.map(cssPath => {
            return <link type="text/css" rel="stylesheet" href={cssPath} />;
          })}
        </header>
      </div>
    );
  }
}



export default styled(Header)`
  ${styles};
`;

export { Header as HeaderVanilla };
