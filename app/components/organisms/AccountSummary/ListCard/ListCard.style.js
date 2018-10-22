import { css } from 'styled-components';

const ListCardStyles = css`
  border: 1px solid ${props => props.theme.borderColorSecondary};
  border-bottom-width: 0;
  width: 285px;
  padding: 5px 25px;
  text-align: left;
  display: block;
  font-size: ${props => props.theme.fontSizeDefault};
  background-color: ${props => props.theme.backgroundColorPrimary};
  ${props => (props.heading ? `background-color: ${props.theme.backgroundColorSecondary};` : '')};

  .title {
    color: ${props => props.theme.textColorBrandPrimary};
    font-weight: ${props => props.theme.fontBold};
    font-size: ${props => props.theme.fontSizeDefault};
  }

  &:hover {
    background-color: ${props => props.theme.backgroundColorSecondary};
  }

  &:last-child {
    border-bottom-width: 1px;
  }
`;

export default ListCardStyles;
