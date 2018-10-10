import { css } from 'styled-components';

const commonStyles = css`
  .label-wrapper {
    padding-bottom: 5px;
    width: 100%;
    position: relative;
    ${props => (props.labelAddOnComponent ? 'display:flex;' : '')};

    & label {
      height: 100%;
      font-weight: ${props => props.theme.fontBold};
      font-size: ${props => props.theme.fontSizeDefault};
      color: ${props => props.theme.textColorSecondary};
      margin: 0;
      ${props => (props.labelAddOnComponent ? 'flex: 1 1 auto;' : '')};
    }

    & .addOnComponentWrapper {
      flex: 0 0 auto;
      height: 100%;
      font-size: ${props => props.theme.fontSizeDefault};
    }
  }

  input {
    width: 100%;
    height: 18px;
    -webkit-tap-highlight-color: transparent;
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    font-size: ${props => props.theme.fontSizeBase};
    background-color: ${props => props.theme.backgroundColorPrimary};
    height: 100%;
    color: ${props => props.theme.textColorSecondary};
    padding: 7px 8px;
    border: 1px solid;
    box-shadow: none;
    border-color: ${props => (props.errorMessage ? props.theme.fieldBorderErrorColor : props.theme.fieldBorderColor)};
    &::placeholder {
      color: ${props => props.theme.textColorPlaceholder};
    }

    &::-ms-clear {
      display: none;
    }

    &:disabled {
      background: ${props => props.theme.backgroundColorDisabled};
      color: ${props => props.theme.textColorPlaceholder};
      border: 1px solid ${props => props.theme.fieldBorderDisabledColor};
    }

    &:focus {
      outline: none;
      border-color: ${props => (props.errorMessage ? props.theme.fieldBorderErrorColor : props.theme.fieldBorderFocusColor)};
    }
  }

  & .input-wrapper{
    margin-bottom: 10px;
  }

  input:-webkit-autofill {
    background-color: ${props => props.theme.fieldBorderColor};
  }
`;

export default commonStyles;
