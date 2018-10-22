export { default } from "./HomePage";

// import { Component } from "react";
// import HomePage from "./HomePage";
// import enhance from "../../../lib/dynamicStore";
// import initialActions from "./HomePage.actions";
// import Image from "../../atoms/Image";
// import saga from "./HomePage.saga";
// import reducer from "./HomePage.reducer";
// import { mapStateToProps, mapDispatchToProps } from "./HomePage.connect";

// class HomePageBootStrap extends Component {
//   static getInitialProps = ({ store }) => {
//     // const NewComp = await enhance(HomePage, {
//     //   key: "homePage",
//     //   reducer,
//     //   saga,
//     //   mapStateToProps,
//     //   mapDispatchToProps,
//     //   initialActions,
//     //   store,
//     //   criticalState: [["homePage", "layout", "homePageData"]]
//     // });
//     // console.log("NewComp", NewComp);
//     return { store };
//   };

//   componentWillMount() {
//     const store = this.props.store;
//     const NewComp = enhance(HomePage, {
//       key: "homePage",
//       reducer,
//       saga,
//       mapStateToProps,
//       mapDispatchToProps,
//       initialActions,
//       store,
//       criticalState: [["homePage", "layout", "homePageData"]]
//     });
//     this.props = { ...this.props, NewComp };
//   }
//   render() {
//     const { NewComp } = this.props;
//     return <NewComp />;
//   }
// }

// export default HomePageBootStrap;
