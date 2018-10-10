import { css } from 'styled-components';

const commonStyles = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  label::before {
    position: absolute;
    left: 0;
    top: calc(50% - 12px);
    content: "";
    height: 20px;
    width: 20px;
    border: 1px solid ${props => props.theme.fieldBorderColor};
    border-radius: 1px;
    background: #fff;
    box-sizing: border-box;
  }

  label::after {
    position: absolute;
    left: 6px;
    top: calc(50% - 7px);
    content: "";
    display: inline-block;
    height: 5px;
    width: 10px;
    border-left: 1px solid;
    border-bottom: 1px solid;
    transform: rotate(-45deg);
    border-color: ${props => props.theme.brandPrimaryColor};
    box-sizing: border-box;
  }

  .label-field {
    flex: 1 1 auto;
    word-break: break-word;
    margin-left: 30px;
    position: relative;
    top: -2px;
    font-weight: ${props => props.theme.fontSemiBold};
  }

  input {
    position: absolute;
    width: 15px;
    height: 15px;
    opacity: 0;
    z-index: -1;
    left:0;
    top:0;
  }

  input + label::after {
    content: none;
  }

  input:checked + label::after {
    content: "";
    border-color: ${props => props.theme.brandPrimaryColor};
  }

  input:focus + label::before {
    border: 2px solid ${props => props.theme.brandPrimaryColor};
    outline: 1px solid;
  }
`;

export default commonStyles;
