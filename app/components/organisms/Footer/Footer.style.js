import { css } from "styled-components";
import { MOBILE } from "../../../constants";
    
const commonStyles = css`
  background: url(${props =>
    props.backgroundImg ? props.backgroundImg : "https://www.finnair.com/go/2018.10-93/Plus/promo/2018/Finnair_plus_big_banner_avis_desktop.jpg"});
  width: 100%;
  padding: 50px 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
  line-height: 1.5;
  flex-direction: column;

  ul {
    list-style-type: none;
    margin: 50px 0 0 0;
    padding: 0;
    font-size: ${props => props.theme.fontSizeHighlight};
    li {
      cursor: pointer;
      color: #fff;
    }
  }
`;

export default commonStyles;
