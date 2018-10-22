import { css } from 'styled-components';

const InvestmentContractStyles = css`
  border: 1px solid ${props => props.theme.borderColorSecondary};
  border-bottom-width: 0;
  text-align: left;
  align-items: center;

  & > div {
    padding: 30px 0;
    font-weight: ${props => props.theme.fontBold};
    text-align: center;
  }

  .name {
    margin-left: 2%;
    color: ${props => props.theme.textColorBrandPrimary};
    font-weight: ${props => props.theme.fontNormal};
  }

  .cta {
    padding: 0;
    margin-left: 4%;

    & button {
      font-size: ${props => props.theme.fontSizeDefault};
      min-height: 25px;
    }
  }

  .value {
    background-color: ${props => props.theme.backgroundColorSecondary};
  }

  &:last-child {
    border-bottom-width: 1px;
  }
`;

export default InvestmentContractStyles;
