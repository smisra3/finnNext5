import { css } from "styled-components";
import { MOBILE } from "../../../constants";
import { specialcharacter } from "../../../locales/en-US";

const commonStyles = css`
  .btn-hamburger {
    cursor: pointer;
    background: none;
    border: none;
    position: relative;
    float: left;
    display: block;
    width: 35px;
    height: 18px;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 8px;
      height: 3px;
      background: #231f20;
      box-shadow: 0 -8px 0 0 #231f20, 0 8px 0 0 #231f20;
    }

    @media (min-width: 1024px) {
      display: none;
      float: right;
    }
  }

  .closebtn {
    position: relative;
    height: 20px;
    width: 20px;
    border: 0;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 10px;
      height: 20px;
      width: 2px;
      background-color: #000;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }

  .navigation-links {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      font-size: ${props => props.theme.fontSizeHighlight};

      li {
        font-size: ${props => props.theme.fontSizeBase};
        padding-right: 5px;
        padding-left: 5px;
        line-height: 2;
      }
      a {
          span {
            &::before {
              content: '/';
              margin: 0 5px;
            }
          }
        &:last-child {
          span{
            &::before {
              content: '';
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
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    padding: 60px 20px 0;
    animation: slide-menu 0.74s ease-out;

    ul {
      flex-direction: column;
      padding-top: 50px;
      padding-bottom: 15px;

      li {
        border-bottom: 1px solid #d5d5d5;
        padding-left: 25px;
      }
    }

    span {
      display: none;
    }

    &.collapse {
      display: block;
    }
  }

  @keyframes slide-menu {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .collapse {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
    }
  }
`;

export default commonStyles;
