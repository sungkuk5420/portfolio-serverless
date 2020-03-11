import axios from "axios";

const URL = "http://localhost:5000";
export const ajaxActions = {
  addClipedImage(imageDatas, cSuccess, cError) {
    let options = {
      url() {
        return `${URL}/add-clip-image`;
      }
    };
    let api = axios.create();
    axios
      .all([
        api.post(options.url(), {
          imageDatas
        })
      ])
      .then(responses => {
        let errors = responses.filter(res => {
          return res.status !== 200;
        });
        if (errors.length < 1) {
          console.log("200 response= ", responses[0]);
          cSuccess(responses[0]);
        } else {
          let errmsgs = errors.reduce((memo = "", res) => {
            return memo + `${res.status} : ${res.message} \n`;
          }, "");
          console.warn(errmsgs);
        }
      });
  },
};
