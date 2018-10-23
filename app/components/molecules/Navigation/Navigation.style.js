import { css } from 'styled-components';
import { MOBILE } from '../../../constants';
import { specialcharacter } from '../../../locales/en-US';

const commonStyles = css`

  .btn-hamburger {
    cursor: pointer;
    background: none;
    border: none;
    position: relative;
    float: left;
    display: block;

    &:focus {
      outline: none;
    }

    @media (min-width: 1024px) {
      display: none;
      float: right;
    }

    .bar1, .bar2, .bar3 {
      width: 35px;
      height: 5px;
      background-color: ${props => props.theme.textColorDivider};;
      margin: 6px 0;
      transition: 0.4s;
    }
    .bar2 {
      width: 30px;
    }
    .bar3 {
      width: 25px;
    }
  }

  .change {
      .bar1 {
        transform: rotate(-45deg) translate(-9px, 7px);
      }
      .bar2 {opacity: 0;}
      .bar3 {
        width: 35px;
        transform: rotate(45deg) translate(-8px, -7px);
      }
  }

  .navigation-links {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        font-size: ${props => props.theme.fontSizeHighlight};
        color: ${props => props.theme.buttonColorSecondary};
      }
      a {
        position: relative;
          span {
            &::before {
              content: '/';
              color: ${props => props.theme.textColorDivider};
              margin: 0 18px 0 18px;
            }
          }
        &:last-child {
          span{
            &::before {
              content: '';
              margin: 0;
            }
          }
        }
      }
    }

    @media (min-width: 1024px) {
      flex-direction: row;
    }

    .slide-header {
      display: flex;
      justify-content: space-between;

      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  .sidenav {
    height: 100%;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.buttonColorSecondary};
    overflow-x: hidden;
    overflow-y: scroll;
    /* padding: 60px 20px 0; */

    margin-top: ${props =>
    (props.deviceType === MOBILE
      ? props.theme.minHeightHeaderMobile
      : props.theme.minHeightHeaderDesktop)}px;

    ul {
      flex-direction: column;
      a{
        border-bottom: 1px solid #d5d5d5;
        height: 80px;
        line-height: 80px;
        li {
          padding-left: 25px;
          padding-right: 25px;

          &::after {
            content: '->';
            float: right;
          }
        }
      }
    }

    span {
      display: none;
    }

    &.collapse {
      display: block;
    }
  }

  .collapse {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
    }
  }

  .brand-logo {
    img{
      width: 160px;
      @media (min-width: 767px) {
        width: 100%;
      }
    }
  }

  .slide-menu-in {
    animation: slide-menu-in 0.5s ease-out;
  }

  .slide-menu-out {
    animation: slide-menu-out 0.5s ease-out;
  }

  @keyframes slide-menu-in {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes slide-menu-out {
    0% {
      opacity: 0;
      transform: translateX(0);
    }

    100% {
      opacity: 1;
      transform: translateX(-100%);
    }
  }
`;

export default commonStyles;
