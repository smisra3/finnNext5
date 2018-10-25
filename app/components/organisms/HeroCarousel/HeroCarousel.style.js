import { css } from 'styled-components';

export default css` 
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  .slick-dots {
    li {
      display: inline-block;
    }
  }
  .pagination-links {
    width: 3rem;
    padding: 0.203rem 0;
    border: 0.5px solid #fff;
    margin-bottom: 1.5rem;
    margin-right: 0.6875rem;
    
  }
  .slick-dots {
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
  .title-container {
    display: flex;
    justify-content: center;
  }
  .img-container {
    position: relative;
    p.title {
      color: #fff;
      padding: 0.625rem;
      font-weight: 900;
      font-size: 1.5rem;

    }
  }
  .title {
    position: absolute;
    top: 30%;
    font-size: 0.75rem;
    font-weight: bold;
  }
  .slick-slide {
    height:540px;
  }

  .slick-slide img {
    height:540px;
  } 

  @media(min-width: 64rem) {
    .pagination-links {
      width: 6.0625rem;
      padding: 0.2031rem 0;
      margin: 0 0.71875rem 2.1875rem 0;
    }
    .title {
      font-size: 3rem;
    }
    .img-container {
      p.title {
        font-size: 2rem;
      }
    }
  }
`;