import { Component } from "react";
import get from "lodash/get";
import HomePage from "./HomePage";
import enhance from "../../../lib/dynamicStore";
import initialActions from "./HomePage.actions";
import Image from "../../atoms/Image";
import saga from "./HomePage.saga";
import reducer from "./HomePage.reducer";

class HomePageBootStrap extends Component {
  // static getInitialProps = ({ store, isServer, req, query, res, pathname, asPath }: any) => {
  //   return { store, isServer, query, pathname, asPath };
  // };

  componentWillMount() {
    const store = this.props.store;
    const NewComp = enhance(HomePage, {
      key: "homePage",
      reducer,
      saga,
      mapStateToProps,
      mapDispatchToProps,
      initialActions,
      store,
      criticalState: [["homePage", "layout", "homePageData"]]
    });
    this.props = { ...this.props, NewComp };
  }
  render() {
    const { NewComp, homePageData } = this.props;
    return <NewComp />;
  }
}

const mapStateToProps = state => ({
  homePageData: get(state, ["homePage", "layout", "homePageData"])
});

const mapDispatchToProps = (dispatch: Map) => ({});

export default HomePageBootStrap;
