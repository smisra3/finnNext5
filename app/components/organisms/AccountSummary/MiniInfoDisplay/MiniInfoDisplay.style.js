import { css } from 'styled-components';

const MiniInfoDisplayStyles = css`
  margin-bottom: 25px;
  width: 200px;

  .title {
    font-weight: ${props => props.theme.fontBold};
    padding-bottom: 15px;
  }

  .displayAmount {
    font-size: ${props => props.theme.fontSizeButtonPrimary};
    padding-bottom: 15px;
  }

  .cta {
    font-size: ${props => props.theme.fontSizeDefault};

    & > button {
      font-size: ${props => props.theme.fontSizeDefault};
      min-height: 30px;
    }
  }
`;

export default MiniInfoDisplayStyles;
