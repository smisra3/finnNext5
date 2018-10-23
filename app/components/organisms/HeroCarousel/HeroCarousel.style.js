import { css } from 'styled-components';
export default css` 
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
  .slick-dots {
    li {
      display: inline-block;
    }
  }
  .pagination-links {
    width: 3.5rem;
    padding: 0.1rem 0.4rem;
    @media(min-width:600px) {
      width: 9.5rem;
      padding: 0.3rem;
    }
    border: 2px solid #fff;
    opacity: 0.8;
    margin: 1.25rem;
  }
  ul.slick-dots {
    bottom: 0;
    display: flex !important;
    justify-content: center;
    width: 100%;
  }
  .slick-active {
    div {
      background: #fff;
    }
  } 
  .img-container {
    position: relative;
    div.title {
      background: unset;
      color: #fff;
    }
    }
  }
  .title{
    position: absolute;
    top: 30%;
    left: 35%;
    font-size: 0.75rem;
    @media(min-width:600px) {
      font-size: 3rem;
    }
    font-weight: bold;
    font-style: italic;
  }
`;