import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import Slider from 'react-slick';
import styled from 'styled-components';

import styles from './HeroCarousel.style';
import Video from '../../atoms/Video';
import Modal from '../../molecules/Modal';
import Picture from '../../atoms/Picture';
import { MODAL_CONFIG, CAROUSEL_VIDEO_SETTINGS } from './HeroCarousel.constants';

class HeroCarousel extends React.Component {

  /**
   * Method used to change the value of state to open the modal.
   */
  openModal = () => this.setState({ openModal: true });

  /**
  * Method used to change the value of the state to close the modal.
  */
  closeModal = () => this.setState({ openModal: false });

  state = { openModal: false, videoUrl: this.props.heroCarouselData[0].large };
  modalConfig = {
    ...MODAL_CONFIG,
    closeModal: this.closeModal
  };
  settings = {
    ...this.props.settings,
    customPaging: () => <div className="pagination-links"></div>,
    afterChange: index => this.setState({ videoUrl: this.props.heroCarouselData[index].large }),
  };

  render() {
    const { heroCarouselData, className } = this.props;
    const viewArray = heroCarouselData.map(element => {
      const { isVideo } = element;
      const { large, medium, small } = isVideo ? element.placeholderImage.cropped : element.image.cropped;
      const { alt } = isVideo ? element.placeholderImage : element.image;
      const title = element.title ? element.title : '';
      return <div className="img-container" key={element.dataKey} onClick={isVideo ? this.openModal : () => {}}>
        <Picture large={large} medium={medium} small={small} alt={alt} />
        <div className="title-container row"><p className="title">{title}</p></div>
      </div>
    });
    return (
      <div className={className}>
        <Slider {...this.settings}>
          {viewArray}
        </Slider>
        <Modal config = {this.modalConfig} isOpen={this.state.openModal}>
          <Video controls
            src={this.state.videoUrl}
            settings = {CAROUSEL_VIDEO_SETTINGS}>
            Sorry, your browser doesn't support embedded videos.
          </Video>
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

export { HeroCarousel };

