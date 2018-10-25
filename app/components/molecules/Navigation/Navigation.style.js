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
      width: 20px;
      height: 3px;
      background-color: ${props => props.theme.textColorDivider};
      margin: 3px 0;
      transition: 0.4s;
      position: relative;

      &::after {
        content: " ";
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background: ${props => props.theme.textColorDivider};;
        transform-origin: bottom left;
        transform: skew(-30deg, 0deg);
      }
    }
    .bar2 {
      width: 18px;
    }
    .bar3 {
      width: 16px;
    }
  }

  .change {
      .bar1 {
        width: 16px;;
        transform: rotate(-45deg) translate(-3px, 5px);
      }
      .bar2 {opacity: 0;}
      .bar3 {
        width: 16px;
        transform: rotate(45deg) translate(-3px, -6px);
      }
      .bar1, .bar3 {
        &::after{
          transform: skew(0deg, 0deg);
        }
      }
  }

  .navigation-links {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        font-size: ${props => props.theme.fontSizeDefault};
        font-weight: 900;
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

  .navWidth {
    width: 80%;
  }

  .sidenav {
    user-select: none;
    height: 100%;
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    background-color: ${props => props.theme.buttonColorSecondary};
    overflow-x: hidden;
    overflow-y: scroll;

    margin-top: 60px;

    ul {
      flex-direction: column;
      a{
        border-bottom: 1px solid #d5d5d5;
        height: 60px;
        line-height: 60px;
        li {
          padding-left: 25px;
          padding-right: 25px;
          font-size: ${props => props.theme.fontFamilyMenu};

          &::after {
            content: '';
            background-image: url('http://127.0.0.1:3002/static/images/Arrow-submenu_mobile.svg');
            float: right;
            width: 11px;
            height: 17px;
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
      opacity: 1;
      transform: translateX(0);
    }

    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

export default commonStyles;
