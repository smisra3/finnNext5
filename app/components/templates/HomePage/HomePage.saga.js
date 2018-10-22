import { put, takeEvery, call, all, takeLatest } from "redux-saga/effects";
import { loadHomeFailure, loadHomePageEditorialSuccess } from "./HomePage.actions";
import { LOAD_HOME_EDITORIAL_DATA } from "./HomePage.constants";
import API from "../../../utils/fetch";
import API_URLS from "../../../constants/api/url";
import Axios from "axios";

// export function* loadHomeEditorialDataSaga(action) {
//   try {
//     const data = yield call(API.fetch, API_URLS.home, action);
//     console.log(data);
//     yield put(loadHomePageEditorialSuccess(data));
//   } catch (err) {
//     yield put(loadHomeFailure(err));
//   }
// }

function* loadHomePageData() {
  try {
    const response = yield call(Axios, "https://travelnowhere.citybreakweb.com/api/gateway");
    yield put({ type: "GOT_HOME_PAGE_DATA", data: response.data });
  } catch (err) {
    yield put(loadHomeFailure(err));
  }
}

export default function* homeLayoutSaga() {
  try {
    yield all([takeLatest("GET_HOME_PAGE_DATA", loadHomePageData)]);
  } catch (err) {
    yield put(loadHomeFailure(err));
  }
}
