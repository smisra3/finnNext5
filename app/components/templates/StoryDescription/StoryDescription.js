import React from 'react';

import saga from './StoryDescription.saga';
import Layout from '../Layout';
import HeadTag from '../../atoms/HeadTag';
import reducer from './StoryDescription.reducer';
import initialActions from './StoryDescription.actions';
import enhance from '../../../lib/dynamicStore';
import HeroCarousel from '../../organisms/HeroCarousel/HeroCarousel';
import { heroCarouselSettings } from './StoryDescription.constants';

class StoryDescription extends React.Component {

  render() {
    return (
      <Layout>
        <HeadTag description="Story Description" title={'Story Description'} />
        <HeroCarousel settings={heroCarouselSettings}/>
        <div style={{ height: "500px" }} />
        <div
          dangerouslySetInnerHTML={(() => ({
            __html: this.props.state.storyDescription.praticalInfo,
          }))()}
        />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({ state });

const mapDispatchToProps = dispatch => ({});

export default enhance(StoryDescription, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: 'storyDescription',
  initialActions,
  criticalState: [['storyDescriptionPage']],
  needQuery: true
});