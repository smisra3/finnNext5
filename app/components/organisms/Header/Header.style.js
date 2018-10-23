import { css } from "styled-components";
import { MOBILE } from "../../../constants";

const commonStyles = css`

  /* padding-bottom: ${props =>
    props.deviceType === MOBILE
      ? props.theme.minHeightHeaderMobile
      : props.theme.minHeightHeaderDesktop}px; */
    position: absolute;
    z-index: ${props => props.theme.zIndex.zSticky};
    top: 0;
    width: 100%;
    will-change: opacity;

    &.sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: ${props => props.theme.backgroundColorPrimary};
      /* box-shadow: ${props => props.theme.containerShadowPrimary} 0 6px 2px -3px; */
    }
    .main-body {
      margin-top: ${props =>
      props.deviceType === MOBILE
        ? props.theme.minHeightHeaderMobile
        : props.theme.minHeightHeaderDesktop}px;
    }

  .antonymous-header-info {
    list-style-type: none;
    margin: 0;
    padding: 0;
    font-size: ${props => props.theme.fontSizeHighlight};
    max-width: 380px;
    li {
      padding-right: 1rem;
      padding-left: 1rem;
      line-height: 2;
    }
  }

  .contact-no {
    border-right: 10px solid ${props => props.theme.borderColorBoldest};
  }

  .personal-investing {
    color: ${props => props.theme.textColorBrandPrimary};
    font-weight: ${props => props.theme.fontSemiBold};
  }

  .header-content {
    min-height: ${props =>
      props.deviceType === MOBILE
        ? props.theme.minHeightHeaderMobile
        : props.theme.minHeightHeaderDesktop}px;
  }
  
  /* .header-content {
    padding-top: 45px;

    @media (max-width: 767px) {
      padding-top: 30px;
    }
  } */

  @media (max-width: 767px) {
    .brand-logo {
      overflow: hidden;
      width: 44px;
      height: 44px;
      img {
        max-width: initial;
      }
    }
  }
  .cart-logo {
      overflow: hidden;
      img {
        max-width: initial;
      }
    }

  .skip-nav {
    text-align: left;
    padding: 20px 0;
    position: absolute;
    top: 0;
    left: 0;
    z-index: ${props => props.theme.zIndex.zSticky - 10};
  }

  .skip-nav a {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }

  .skip-nav a:focus,
  .skip-nav a:active {
    position: static;
    left: 0;
    width: auto;
    height: auto;
    overflow: visible;
    text-decoration: underline;
  }
`;

export default commonStyles;
