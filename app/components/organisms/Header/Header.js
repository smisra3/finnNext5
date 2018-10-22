// @flow
import { Fragment } from "react";
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

const skipNavigationHandler = (e: SyntheticEvent<>) => {
  e.preventDefault();
  const wrapper = document.getElementById("content-wrapper");
  wrapper.focus();
};

const Header = ({ className }: Props): Node => (
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
        <div className="row between-xs header-content">
          <Link href={LOGIN}>
            <a className="brand-logo col-xs-3">
              <Image {...brandLogoImage} />
            </a>
          </Link>
          <ul className="row col-xs-9 col-md-5 antonymous-header-info">
            {AntonymousHeaderInfo.map(item => (
              <li key={item.id} className={item.id}>
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {css.map((cssPath, idx) => {
        return <link type="text/css" rel="stylesheet" href={cssPath} key={idx} />;
      })}
    </header>
  </div>
);

export default styled(Header)`
  ${styles};
`;

export { Header as HeaderVanilla };
