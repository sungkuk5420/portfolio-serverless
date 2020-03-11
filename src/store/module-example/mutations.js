import { T } from "./types";

export const mutations = {
  [T.TYPE](state, data) {
    console.log(
      `mutation [T.TYPE] data = ${data}`
    );
    state = data;
  },
};
