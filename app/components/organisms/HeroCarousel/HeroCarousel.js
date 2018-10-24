import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import Slider from 'react-slick';
import styled from 'styled-components';

import styles from './HeroCarousel.style';
import Image from '../../atoms/Image';
import Modal from '../../molecules/Modal';

class HeroCarousel extends React.Component {

  state = { openModal: false };
  // children,
  // closeModal,
  // className,
  // isOpen,
  // handleAfterOpenFunc,
  // handleRequestCloseFunc,
  // setOverlayRef,
  // setContentRef,
  openModal = () => this.setState({ openModal: true });
  closeModal = () => this.setState({ openModal: false });

  render() {
    const { heroCarouselData, className, title } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      customPaging: () => <div className="pagination-links"></div>,
      afterChange: () => console.log('chnaged')
    };
    let viewArray = heroCarouselData.map(element => {
      const { isVideo } = element;
      const { url } = isVideo ? element.placeholderImage.original : element.image.original;
      const { alt } = isVideo ? element.placeholderImage : element.image;
      const title = element.title ? element.title : '';
      return <div className="img-container" onClick={isVideo ? this.openModal : false}>
        <Image src={url} alt={alt} />
        <div className="title">{title}</div>
      </div>
    });
    return (
      <div className={className}>
        <Slider {...settings}>
          {viewArray}
        </Slider>
        <Modal isOpen={this.state.openModal} closeModal={this.closeModal}>
          <video controls
            src="https://resources.citybreak.com/webapps/DN/video.mp4"
            width="100%"
            height="100%"
            autoplay="true">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroCarouselData: get(state, ['storyDescription', 'heroCarousel', 'data']),
  title: get(state, ['storyDescription', 'title'])
});

export default connect(mapStateToProps)(styled(HeroCarousel)`${styles}`);

