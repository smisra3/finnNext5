import { css } from 'styled-components';

const commonStyles = css`
  border: 1px solid ${props => props.theme.borderColorSecondary};
  box-shadow: ${props => props.theme.containerShadowPrimary} -6px 0 6px 0;
  padding: 10px 25px;
  background-color: ${props => props.theme.backgroundColorPrimary};
  z-index: 1;

  .contractHeader {
    align-items: center;
    text-align: center;
    font-weight: ${props => props.theme.fontBold};

    .heading {
      font-weight: ${props => props.theme.fontBold};
    }
  }

  .heading: after {
    content: '';
    display: table;
    position: absolute;
    top: 20px;
    right: 22%;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    ${props => (props.sortOrder
    ? 'border-top: 6px solid #000;'
    : 'border-bottom: 6px solid #000;')};
  }

  .accountSummaryHeader {
    padding: 30px 0;
    border-bottom: 1px solid ${props => props.theme.borderColorSecondary};

    & h2 {
      font-size: ${props => props.theme.fontSizeButtonPrimary};
      color: ${props => props.theme.textColorPrimary};
      margin-top: 0;
    }
  }
`;

export default commonStyles;
