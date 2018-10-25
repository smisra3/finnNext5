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
      width: 6.0625rem;
      padding: 0.2031rem 0;
    }
    border: 0.5px solid #fff;
    opacity: 0.8;
    margin: 0 0.71875rem 2.1875rem 0;
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
    p.title {
      background: unset;
      color: #fff;
      width: auto;
      height: auto;
      margin: 0 auto;
      padding: 10px;
      font-weight: 900;
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