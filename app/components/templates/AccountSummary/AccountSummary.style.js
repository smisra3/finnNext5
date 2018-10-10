import { css } from "styled-components";

const commonStyles = css`
  .accountSummaryContainer {
    margin: 60px auto;
    padding: 20px;
    max-width: 1024px;
    @media (max-width: 767px) {
      margin: 20px auto;
      max-width: 90%;
    }
  }
`;

export default commonStyles;
