import { T } from "./types";

import { ajaxActions } from "./ajaxActions";

export const actions = {
  [T.CHANGE_PROJECT_MODAL_DATA]({ commit }, {data,cb}) {
    console.log(
      `store action [T.CHANGE_PROJECT_MODAL_DATA] data = ${data}`
    );
    commit(T.CHANGE_PROJECT_MODAL_DATA, data);
    if(cb){
      cb();
    }
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
