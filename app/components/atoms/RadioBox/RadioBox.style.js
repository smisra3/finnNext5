import { css } from 'styled-components';
import { BRAND_THEME, PRIMARY_THEME } from '../../../constants';

const commonStyles = css`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  .label-field {
    flex: 1 1 auto;
    margin-left: 10px;
    word-break: break-all;
  }

  .radio {
    flex: 1 1 auto;
    height: 15px;
    ${props => (props.imageUrl ? `background-image: url('${props.imageUrl}')` : '')};
    font-size: 18px;
    margin-top: 1px;
  }

  .radio.radio-tick::before {
    top: 40%;
    font-size: 20px;
  }

  input {
    position: absolute;
    width: 15px;
    height: 15px;
    opacity: 0;
  }

  &.is-checked {
    .radio {
      ${props => (props.imageUrl ? `border: 2px solid  ${props.theme.primaryColor}` : '')};
    }
  }

  &.is-focused {
    outline: 1px dashed ${props => props.theme.primaryColor};
  }
`;

export default {
  [BRAND_THEME]: css`
    font-weight: ${props => props.theme.fontSemiBold};
    ${commonStyles};
  `,
  [PRIMARY_THEME]: css`
    ${commonStyles};
  `,
};
