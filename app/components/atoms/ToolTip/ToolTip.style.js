import { css } from 'styled-components';
import { BRAND_THEME, PRIMARY_THEME, DESKTOP, MOBILE } from '../../../constants';

/* stylelint-disable no-descending-specificity */
export const commonStyles = css`
  position: relative;
  border: none;

  .tooltip-icon {
    &::after,
    &::before {
      left: 50%;
      border: 10px solid transparent;
      content: '';
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    &::after {
      border-color: transparent;
      border-width: 10px;
      margin-left: -10px;
      border-top-color: ${props => props.theme.primaryBgColor};
      z-index: 3;
    }

    &::before {
      border-color: transparent;
      border-width: 11px;
      margin-left: -11px;
      border-top-color: ${props => props.theme.secondaryBgColor};
      z-index: 1;
    }
  }

  .tooltip-label {
    z-index: 2;
    position: absolute;
    padding-bottom: 1em;
    bottom: 100%;

    .tooltip-label-child {
      display: block;
      border-radius: 2px;
      padding: 0.5em;
      background-color: ${props => props.theme.primaryBgColor};
      border: 1px solid ${props => props.theme.secondaryBgColor};
      font-family: ${props => props.theme.secondaryFontFamily};

      button {
        font-family: ${props => props.theme.secondaryFontFamily};
        text-align: left;
        line-height: 15px;
      }
    }

    a {
      color: #000;
    }
  }

  &.is-tooltip-visible {
    .tooltip-icon {
      &::after,
      &::before {
        opacity: 1;
        visibility: visible;
      }
    }

    .tooltip-label {
      opacity: 1;
      visibility: visible;
    }
  }

  &.is-tooltip-hidden {
    .tooltip-icon {
      &::after,
      &::before {
        opacity: 0;
        visibility: hidden;
      }
    }

    .tooltip-label {
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const loftStyles = css`
  .tooltip-icon {
    &::after,
    &::before {
      top: ${props => props.top || '-100% '};
    }
  }
`;

export const factoryStyles = css`
  .tooltip-icon {
    &::after,
    &::before {
      top: ${props => props.top || '-81% '};
    }
  }
`;

export const commonMobileStyles = css`
  .tooltip-label-child.large-tooltip {
    padding: 12px;
    position: relative;
    font-size: 12px;

    .close {
      position: absolute;
      right: 5px;
      top: 5px;
    }
  }
`;
/* TODO: refactor inherited styles implementation for a better solution */
export default {
  [BRAND_THEME]: {
    [DESKTOP]: css`
      ${commonStyles};
      ${loftStyles};
      ${props =>
    (props.inheritedStyles && props.inheritedStyles[BRAND_THEME]
      ? props.inheritedStyles[BRAND_THEME][DESKTOP]
      : '')};
      ${props =>
    (props.inheritedStyles && !props.inheritedStyles[BRAND_THEME]
      ? props.inheritedStyles[DESKTOP]
      : '')};
      ${props =>
    (props.inheritedStyles &&
        !props.inheritedStyles[BRAND_THEME] &&
        !props.inheritedStyles[DESKTOP]
      ? props.inheritedStyles
      : '')};
    `,
    [MOBILE]: css`
      ${commonStyles};
      ${loftStyles};
      ${commonMobileStyles};
      ${props =>
    (props.inheritedStyles && props.inheritedStyles[BRAND_THEME]
      ? props.inheritedStyles[BRAND_THEME][MOBILE]
      : '')};
      ${props =>
    (props.inheritedStyles && !props.inheritedStyles[BRAND_THEME]
      ? props.inheritedStyles[MOBILE]
      : '')};
      ${props =>
    (props.inheritedStyles &&
        !props.inheritedStyles[BRAND_THEME] &&
        !props.inheritedStyles[MOBILE]
      ? props.inheritedStyles
      : '')};

      span.tooltip-label-child.large-tooltip {
        font-size: 15px;
        line-height: 1.15;
      }
    `,
  },
  [PRIMARY_THEME]: {
    [DESKTOP]: css`
      ${commonStyles};
      ${factoryStyles};
      ${props =>
    (props.inheritedStyles && props.inheritedStyles[PRIMARY_THEME]
      ? props.inheritedStyles[PRIMARY_THEME][DESKTOP]
      : '')};
      ${props =>
    (props.inheritedStyles && !props.inheritedStyles[PRIMARY_THEME]
      ? props.inheritedStyles[DESKTOP]
      : '')};
      ${props =>
    (props.inheritedStyles &&
        !props.inheritedStyles[PRIMARY_THEME] &&
        !props.inheritedStyles[DESKTOP]
      ? props.inheritedStyles
      : '')};
    `,
    [MOBILE]: css`
      ${commonStyles};
      ${factoryStyles};
      ${commonMobileStyles};
      ${props =>
    (props.inheritedStyles && props.inheritedStyles[PRIMARY_THEME]
      ? props.inheritedStyles[PRIMARY_THEME][MOBILE]
      : '')};
      ${props =>
    (props.inheritedStyles && !props.inheritedStyles[PRIMARY_THEME]
      ? props.inheritedStyles[MOBILE]
      : '')};
      ${props =>
    (props.inheritedStyles &&
        !props.inheritedStyles[PRIMARY_THEME] &&
        !props.inheritedStyles[MOBILE]
      ? props.inheritedStyles
      : '')};
    `,
  },
};
