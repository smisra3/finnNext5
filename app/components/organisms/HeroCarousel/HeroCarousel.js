import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import Slider from 'react-slick';
import styled from 'styled-components';

import styles from './HeroCarousel.style';
import Image from '../../atoms/Image';

class HeroCarousel extends React.Component {

  render() {
    const { heroCarouselData, className, title } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      customPaging: () => <div className="pagination-links"></div>
    };
    let viewArray = heroCarouselData.map(element => {
      const { isVideo } = element;
      const { url } = isVideo ? element.placeholderImage.original : element.image.original;
      const { alt } = isVideo ? element.placeholderImage : element.image;
      const title = element.title ? element.title : '';
      return <div className="img-container">
        <Image isVideo={isVideo} src={url} alt={alt} />
        <div className="title">{title}</div>
      </div>
    });
    return (
      <div className={className}>
        <Slider {...settings}>
          {viewArray}
        </Slider>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroCarouselData: get(state, ['storyDescription', 'heroCarousel', 'data']),
  title: get(state, ['storyDescription', 'title'])
});

export default connect(mapStateToProps)(styled(HeroCarousel)`${styles}`);

