import { css } from 'styled-components';

const commonStyles = css`
  margin-top: 60px;
  margin-bottom: 60px;
  .circular-buffer{
    padding: 20px;
  }
  .bottom-gutter{
    margin-bottom: 20px;
  }
  .help-support{
    background-color: ${props => props.theme.cautionBackgroundColor};

    p, a{
      font-size: 12px;
    }
  }

  p{
    margin: 0px;
  }

  .login-form{
    background-color: ${props => props.theme.backgroundColorPrimary};
  }
  .response-error {
    font-weight: bold;
    padding-bottom: 15px;
    color:red;
    font-size: 15p;
  }

  .input-header {
    display: block;
    font-size: 12px;
  }

  .login-info{
    margin-bottom: 20px;
    color: ${props => props.theme.textColorSecondaryLight};
  }

  .registration-and-info{
    background-color: ${props => props.theme.backgroundColorSecondary};
  }

  hr{
    border-bottom: 1px solid ${props => props.theme.borderColorSecondary};
    margin:0;
  }

  .information{
    color: ${props => props.theme.textColorSecondaryLight};
    line-height: 18px;
  }

  .footer-links{
    color: ${props => props.theme.textColorSecondaryLight};
    a {
      padding-right: 5px;
      line-height: 16px;
      border-right: 1px solid ${props => props.theme.textColorSecondaryLight};
      margin-right: 5px;
    }
  }

`;

export default commonStyles;

