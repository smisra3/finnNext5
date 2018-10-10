// @flow
import { PureComponent } from "react";
import get from "lodash/get";
import Layout from "../Layout";
import enhance from "../../../lib/dynamicStore";
import initialActions from "./HomePage.actions";
import HeadTag from "../../atoms/HeadTag";
import Image from '../../atoms/Image';
import saga from "./HomePage.saga";
import reducer from "./HomePage.reducer";
import TripDetailsCard from "../../molecules/TripDetailsCard";

type Props = {};

class HomePage extends PureComponent<Props> {
  static defaultProps = {
    seoData: {
      homePageMetaDesc: "",
      homePagePageTitle: "",
      seoMetaDesc: undefined
    },
    editorialData: {},
    homePageData: {}
  };

  createMarkup() {
    return {__html: this.props.homePageData.stories[0].quote}
  }

  render() {
    const { homePageData } = this.props;
    const story = homePageData.stories[0] ;
    return (
      <Layout title="home" className="row" id="content-wrapper">
        <HeadTag description="Home Page Description" title={story ? story.title : 'Home Page'} />
        <div className="row">
          {story.media.images.map( image => <Image className="row" src={image.cropped.large.url} alt="image" />)}
        </div>
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
        <div className="row">
          <TripDetailsCard tripDetailsList={story.details} />
        </div>
      </Layout>
    );
  }
}
/* istanbul ignore next */
const mapStateToProps = state => ({
  homePageData: get(state, ["homePage", "layout", "homePageData"])
});

const mapDispatchToProps = (dispatch: Map) => ({});

export default enhance(HomePage, {
  mapStateToProps,
  mapDispatchToProps,
  saga,
  reducer,
  key: "homePage",
  initialActions,
  criticalState: [["homePage", "layout", "homePageData"]]
});

export { HomePage as HomePageDisconnected };
