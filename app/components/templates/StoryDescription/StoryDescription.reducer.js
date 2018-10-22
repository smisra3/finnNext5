// @flow
import { updateState } from "../../../utils/utils";

export const gotStoryPageData = (state, data) => updateState(state,  data );

export const layout = (state = {}, action) => {
  switch (action.type) {
    case "GOT_STORY_DESCRIPTION_PAGE_DATA": {
      return gotStoryPageData(state, action.data);
    }
    default:
      return state;
  }
};

export default layout;
