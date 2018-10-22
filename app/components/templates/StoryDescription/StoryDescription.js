import React from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';

import saga from './StoryDescription.saga';
import Layout from '../Layout';
import HeadTag from '../../atoms/HeadTag';
import reducer from './StoryDescription.reducer';
import initialActions from './StoryDescription.actions';
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
        <HeadTag description="Story Description" title={'Story Description'} />
        This is story Description page.......
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  storyListingPageData: get(state, ['storyDescriptionPage', 'storyDescriptionPageData'])
});

const mapDispatchToProps = dispatch => ({});

export default enhance(StoryDescription, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: 'storyDescription',
  initialActions,
  criticalState: [['storyDescriptionPage']]
});