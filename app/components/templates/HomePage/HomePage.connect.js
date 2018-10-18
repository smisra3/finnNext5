import get from "lodash/get";

export const mapStateToProps = state => ({
  homePageData: get(state, ["homePage", "layout", "homePageData"])
});

export const mapDispatchToProps = (dispatch: Map) => ({});
