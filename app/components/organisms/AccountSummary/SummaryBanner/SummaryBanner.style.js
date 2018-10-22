import { css } from 'styled-components';

const commonStyles = css`
  display: flex;
  background-color: ${props => props.theme.backgroundColorGrey};
  padding: 15px 20px;
  margin-top: 20px;

  & > div {
    border-right: 1px solid ${props => props.theme.colorOutline};
    padding-right: 15px;
    margin-right: 20px;
  }

  & > div:last-child {
    border-right: 0;
  }
`;

export default commonStyles;
