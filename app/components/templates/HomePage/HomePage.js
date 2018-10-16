// @flow
import { Component, Fragment } from "react";
import get from "lodash/get";
import Layout from "../Layout";
import enhance from "../../../lib/dynamicStore";
import initialActions from "./HomePage.actions";
import HeadTag from "../../atoms/HeadTag";
import Image from "../../atoms/Image";
import saga from "./HomePage.saga";
import reducer from "./HomePage.reducer";
import TripDetailsCard from "../../molecules/TripDetailsCard";
import Modal from "../../molecules/Modal";
import Button from "../../atoms/Button";

type Props = {};

class HomePage extends Component<Props> {
  static getInitialProps = ({ store, isServer, req, query, res, pathname, asPath }: any) => {
    return { store, isServer, query, pathname, asPath };
  };
  state = { openModal: false };

  activateModal = () => {
    this.setState({ openModal: true });
  };

  deactivateModal = () => {
    this.setState({ openModal: false });
  };

  addWidgets = () => {
    alert("ran after popup is opened");
    if (document.getElementById("widget")) return;
    const script = document.createElement("script");
    const scriptContainer = document.createElement("div");
    scriptContainer.id = "widget";
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
    document.getElementsByTagName("script")[0].parentNode.appendChild(scriptContainer);
    scriptContainer.appendChild(script);
    alert("Widget Script has been downloaded..see network tab in Dev Tools");
  };

  render() {
    const { homePageData } = this.props;
    const story = homePageData ? homePageData.stories[0] : [];
    if (story.length === 0) {
      return <div>Data is being rendered</div>;
    } else {
      return (
        <Layout title="home" className="row" id="content-wrapper">
          <HeadTag description="Home Page Description" title={story ? story.title : "Home Page"} />
          <Fragment>
            <div className="row">
              {story.media.images.map(image => (
                <Image className="row" src={image.cropped.large.url} alt="image" />
              ))}
            </div>
            <div dangerouslySetInnerHTML={{ __html: story.quote }} />
            <div className="row">
              <TripDetailsCard tripDetailsList={story.details} />
            </div>
            <Button primary onClick={this.activateModal}>
              Activate Modal
            </Button>
            <Modal
              handleAfterOpenFunc={this.addWidgets}
              closeModal={this.deactivateModal}
              isOpen={this.state.openModal}
            />
          </Fragment>
        </Layout>
      );
    }
  }
}
export default HomePage;

export { HomePage as HomePageDisconnected };
