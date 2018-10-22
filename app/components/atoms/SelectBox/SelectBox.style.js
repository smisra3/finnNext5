import { css } from 'styled-components';
import { DESKTOP, MOBILE, PRIMARY_THEME, BRAND_THEME } from '../../../constants';

const commonStyles = css`
  position: relative;
  width: 123px;

  /* stylelint-disable-next-line no-descending-specificity */
  .dynamic-placeholder {
    color: ${props => props.theme.inputPlaceholder};
    position: absolute;
    top: 14px;
    left: 11px;
    z-index: -1;
    opacity: 0;
  }

  &.visible-dynamic-label {
    .dynamic-placeholder {
      top: -9px;
      left: 0;
      color: ${props => props.theme.primaryColor};
      z-index: 0;
      opacity: 1;
    }
  }

  &.disabled .custom-selected {
    pointer-events: none;
    background: ${props => props.theme.lightGrey5};
    color: ${props => props.theme.primaryColor};
  }

  .select-element {
    opacity: 0;
    position: absolute;
    height: 30px;
    z-index: -1;
  }

  .icon-arrow {
    position: absolute;
    right: 11px;
    top: 15px;
    z-index: 1;
    font-size: 16px;
  }

  span.valid-icon {
    position: absolute;
    right: 30px;
    top: 50%;
    margin-top: -12px;
    color: ${props => props.theme.iconCheckedColor};
    font-size: 18px;

    &::before {
      content: '\f175';
      color: ${props => props.theme.iconCheckedColor};
      right: 23px;
    }
  }
  /* stylelint-disable-next-line no-descending-specificity */
  .custom-selected {
    width: 100%;
    border: 1px solid ${props => props.theme.primaryColor};
    line-height: 40px;
    display: inline-block;
    padding: 0 12px;
    cursor: pointer;
    font-size: 11px;
    font-weight: ${props => props.theme.fontMedium};
    color: ${props => props.theme.primaryColor};
    text-transform: uppercase;
    /* stylelint-disable-next-line no-descending-specificity */
    &:focus {
      outline: 1px dashed ${props => props.theme.primaryColor};

      &:not(.focus-visible) {
        outline: none;
      }
    }
  }
  /* stylelint-disable-next-line no-descending-specificity */
  &.has-error .custom-selected {
    border: 2px solid ${props => props.theme.errorColor};
  }

  .drop-down {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    border-left: 1px solid ${props => props.theme.darkGrey1};
    border-right: 1px solid ${props => props.theme.darkGrey1};
    border-bottom: 1px solid ${props => props.theme.darkGrey1};
    position: absolute;
    background: ${props => props.theme.primaryBgColor};
    max-height: 87px;
    overflow: auto;
    z-index: 1;

    li {
      padding: 8px 12px 9px;
      border-bottom: 1px solid ${props => props.theme.darkGrey1};
      font-size: 10px;
      letter-spacing: 1px;
      color: ${props => props.theme.primaryColor};
      cursor: pointer;
    }

    li.selected {
      background: ${props => props.theme.darkGrey1};
    }

    li:last-child {
      border-bottom: none;
    }

    li:focus {
      position: relative;
      outline: none;

      &::after {
        content: '';
        display: block;
        position: absolute;
        left: 1px;
        right: 1px;
        top: 1px;
        bottom: 1px;
        border: 1px dashed ${props => props.theme.primaryColor};
      }

      &:not(.focus-visible) {
        &::after {
          border: none;
        }
      }
    }
  }
`;
const mobileStyles = css`
  /* stylelint-disable-next-line no-descending-specificity */

  &.visible-dynamic-label {
    margin-top: 17px;
    font-size: 11px;

    .dynamic-placeholder {
      top: -9px;
    }
  }

  /* stylelint-disable-next-line no-descending-specificity */
  .custom-selected {
    border: 1px solid ${props => props.theme.primaryColor};
    line-height: 40px;
    padding: 0 15px;
    font-family: ${props => props.theme.secondaryFontFamily};
    font-weight: ${props => props.theme.fontBook};
    font-size: ${props => props.theme.baseFontSize};
    letter-spacing: 0.1em;
    color: ${props => props.theme.secondary_textColor};
    text-transform: initial;

    /* stylelint-disable-next-line no-descending-specificity */
    &:focus {
      outline: 1px dashed ${props => props.theme.primaryColor};
    }
  }

  .select-element {
    height: 40px;
    z-index: 2;

    &.active {
      z-index: -1;
    }
  }

  .icon-arrow {
    font-size: 1.5em;
  }
`;
export default {
  [PRIMARY_THEME]: {
    [DESKTOP]: css`
      ${commonStyles};

      span.valid-icon {
        &::before {
          content: '\f133';
        }
      }
    `,
    [MOBILE]: css`
      ${commonStyles};
      ${mobileStyles};

      span.valid-icon {
        &::before {
          content: '\f133';
          ${props => (props.isCheckout ? 'top: 35%' : '')};
        }
      }
    `,
  },
  [BRAND_THEME]: {
    [DESKTOP]: css`
      ${commonStyles};
    `,
    [MOBILE]: css`
      ${commonStyles};
      ${mobileStyles};
    `,
  },
};
