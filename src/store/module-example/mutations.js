import { T } from "./types";

export const mutations = {
  [T.CHANGE_PROJECT_MODAL_DATA](state, data) {
    console.log(
      `mutation [T.CHANGE_PROJECT_MODAL_DATA] data = ${data}`
    );
    state.projectModalActiveIndex = data;
  },
};
