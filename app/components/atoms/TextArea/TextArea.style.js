import { css } from 'styled-components';

export default css`
  label {
    width: 100%;
    display: flex;
  }

  textarea {
    border: none;
    width: 0;
    flex: 1 1;
    height: 200px;

    &::placeholder {
      color: ${props => props.theme.inputPlaceholder};
    }

    &:focus {
      outline: none;
    }
  }

  .error {
    font-family: ${props => props.theme.secondaryFontFamily};
    font-size: 10px;
    letter-spacing: 1px;
    text-align: left;
    color: ${props => props.theme.errorColor};
    margin-top: 5px;
  }
`;
