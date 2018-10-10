import { css } from 'styled-components';

const ListStyles = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  ${props =>
    (props.defaultStyles && props.listType === 'ul'
      ? `
      list-style-type: circle;
      ` : '')};
  ${props =>
    (props.defaultStyles && props.listType === 'ol'
      ? `
      list-style-type: upper-roman;
      ` : '')};
`;

export default ListStyles;
