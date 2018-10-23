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
    background: none;

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
        color: ${props => props.theme.WHITE};
      }
      a {
        position: relative;
          span {
            &::before {
              content: '/';
              margin: 0 0 0 5px;
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
    background-color: #fff;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 60px 20px 0;
    animation: slide-menu 0.5s ease-out;

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

  .collapse {
    display: none;
    @media (min-width: 1024px) {
      display: flex;
    }
  }

 .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    &.show {
      display: block;
    }
}

.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: #ddd;
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
  @keyframes slide-menu-in {
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
