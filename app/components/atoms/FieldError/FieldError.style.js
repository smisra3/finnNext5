import { css } from 'styled-components';

const commonStyles = css`
  &.error {
    font-family: ${props => props.theme.fontFamilySecondary};
    font-size: 12px;
    text-align: left;
    color: ${props => props.theme.textColorError};
    margin-bottom:10px;

    span {
      display: block;
      color: ${props => props.theme.textColorError};
    }
  }
`;

export default commonStyles;
