import { css } from "styled-components";
import { MOBILE } from "../../../constants";
    
const commonStyles = css`
  background: url(${props =>
    props.backgroundImg ? props.backgroundImg : "https://via.placeholder.com/550x300"});
  width: 100%;
  padding: 50px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  flex-direction: column;
  ul {
    list-style-type: none;
    margin: 50px 0 0 0;
    padding: 0;
    font-size: ${props => props.theme.fontSizeHighlight};
  }
`;

export default commonStyles;
