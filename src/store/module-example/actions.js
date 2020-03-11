import { T } from "./types";

import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.TYPE]({ commit }, activeTab) {
    console.log(
      `store action [T.TYPE] activeTab = ${activeTab}`
    );
    commit(T.TYPE, activeTab);
  },
  [T.TYPE]({ commit }, { data = {}, cb }) {
    console.log(`store action [T.TYPE] data : ${data}`);
    ajaxActions.getClipedImages({
      data,
      whereStr,
      cSuccess: results => {
        console.log(`action / TYPE / success`);
        console.log(" reults=", results);
        commit(T.TYPE, results.data);
        if (cb) {
          cb(results.data);
        }
      },
      cError: res => {
        console.log(`action / TYPE / error`, res);
      }
    });
  }
};
