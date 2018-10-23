import { put, takeEvery, call, all, takeLatest } from "redux-saga/effects";
import API from "../../../utils/fetch";
import API_URLS from "../../../constants/api/url";
import Axios from "axios";

function* loadStoryListingPageData() {
  try {
    const response = yield call(Axios, "https://travelnowhere.citybreakweb.com/api/gateway");
    yield put({ type: "GOT_STORY_PAGE_DATA", data: response.data });
  } catch (err) {
    yield put(loadHomeFailure(err));
  }
}

export default function* storyListingLayoutSaga() {
  try {
    yield all([takeLatest("GET_STORY_PAGE_DATA", loadStoryListingPageData)]);
  } catch (err) {
    yield put(loadHomeFailure(err));
  }
}
