import React from 'react';

import saga from './StoryDescription.saga';
import Layout from '../Layout';
import HeadTag from '../../atoms/HeadTag';
import reducer from './StoryDescription.reducer';
import initialActions from './StoryDescription.actions';
import enhance from '../../../lib/dynamicStore';
import HeroCarousel from '../../organisms/HeroCarousel/HeroCarousel';

class StoryDescription extends React.Component {

  render() {
    return (
      <Layout>
        <HeadTag description="Story Description" title={'Story Description'} />
        <HeroCarousel />
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
});

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