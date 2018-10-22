import React from 'react';
import get from 'lodash/get';

import saga from './Story.saga';
import Layout from '../Layout';
import HeadTag from '../../atoms/HeadTag';
import reducer from './Story.reducer';
import initialActions from './Story.actions';
import enhance from '../../../lib/dynamicStore';

class StoryDescription extends React.Component {
  static async getInitialProps(props) {}

  static defaultProps = {
    seoData: {
      homePageMetaDesc: '',
      homePagePageTitle: '',
      seoMetaDesc: undefined
    },
    storyListing: {}
  };

  render() {
    return (
      <Layout>
        <HeadTag description="Story" title={'Story Listing'} />
        This is story listing page.......
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  storyListingPageData: get(state, ['storyPage', 'storyPageData'])
});

const mapDispatchToProps = dispatch => ({});

export default enhance(StoryDescription, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: 'story',
  initialActions,
  criticalState: [['storyPage']]
});