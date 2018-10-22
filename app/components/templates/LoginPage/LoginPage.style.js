import { css } from 'styled-components';

const commonStyles = css`
  .login-container {
    margin: 60px auto;
    max-width: 480px;
    @media (max-width: 767px){
      margin: 20px auto;
      max-width: 90%;
    }
  }
`;

export default commonStyles;
