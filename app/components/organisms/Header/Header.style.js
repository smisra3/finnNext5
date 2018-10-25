import { css } from 'styled-components';
import { MOBILE } from '../../../constants';

const commonStyles = css`

  /* padding-bottom: ${props =>
    (props.deviceType === MOBILE
      ? props.theme.minHeightHeaderMobile
      : props.theme.minHeightHeaderDesktop)}px; */
    position: absolute;
    z-index: ${props => props.theme.zIndex.zSticky};
    top: 0;
    width: 100%;
    will-change: opacity;

    .main-header {
      height: 60px;
    }

    .sticky {
      position: fixed;
      top: 0;
      width: 100%;
      background-color: ${props => props.theme.buttonColorSecondary};
      /* box-shadow: ${props => props.theme.containerShadowPrimary} 0 6px 2px -3px; */

      .navigation-links {
        li {
          color: #000;
          transition: 0.9s;
        }
      }
    }
    .main-body {
      margin-top: ${props =>
    (props.deviceType === MOBILE
      ? props.theme.minHeightHeaderMobile
      : props.theme.minHeightHeaderDesktop)}px;
    }

  .header-content {
    min-height: ${props =>
    (props.deviceType === MOBILE
      ? props.theme.minHeightHeaderMobile
      : props.theme.minHeightHeaderDesktop)}px;
  }

  .brand-logo {
    img{
      width: 130px;
      @media (min-width: 767px) {
        width: 100%;
        height: 20px;
      }
    }
  }

  .cart-logo {
      overflow: hidden;
      img {
        max-width: initial;
        width: 25px;
        height: 18px;
        @media (min-width: 767px) {
            width: 100%;
            height: 22px;
        }
      }
    }

    .header-observer {
  height: 1px;
  margin-top: -1px;
  position: absolute;
  top: 2em;
  width: 1px;
}
`;

export default commonStyles;
