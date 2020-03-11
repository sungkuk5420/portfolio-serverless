/**
 * Created by pc on 2017/06/20.
 */

var BASELANG = "ja",
  DATABASE = undefined,
  DBData = undefined,
  defaultPath = "/";
var firebaseConfig = {
  apiKey: "AIzaSyCsH1pUNQ0HrEDPvHwFjOAzOcYgMmHRlKc",
  authDomain: "translate-c25e0.firebaseapp.com",
  databaseURL: "https://translate-c25e0.firebaseio.com",
  projectId: "translate-c25e0",
  storageBucket: "translate-c25e0.appspot.com",
  messagingSenderId: "756527365478",
  appId: "1:756527365478:web:5454703324730ff64f1ca7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//checkKey를 넣으면 2번 검사한다. ex)한글 영어 따로따로 저장함. 안넣으면 입력키가 한글이면 한글에 바로 저장됨.
//autoKey를 넣으면 언어를 자동으로 탐색해준다. 일본어를 넣어서 일본어 번역을 시도할경우 한국어가 나옴. 채팅의 경우 on해주면 좋음.
// textTranslate({
//     sendText : 'aaa',
//     sendLang : 'ja',
//     resultLang : 'ko',
//     checkKey : true,
//     autoKey : true
// });
translateInit(() => {});
function translateInit(cb) {
  getDataBase().then(
    function(DBData) {
      // 성공시
      console.log(DBData);
      if (cb) {
        cb();
      }
    },
    function(error) {
      // 실패시
      console.error(error);
    }
  );
}
function getDataBase() {
  return new Promise(function(resolve, reject) {
    DATABASE = firebase.database();
    DATABASE.ref(defaultPath).on("value", function(data) {
      var database = data.val();
      DBData = Object.keys(database).map(function(data) {
        return {
          id: data,
          data: database[data]
        };
      });
      resolve(DBData);
    });
  });
}
async function textTranslateAll(resultLang) {
  var textArr = [];
  await $("[data-langtext]").each(function() {
    var $this = $(this);
    var sendText = $.trim($this.text());
    let checkKey = false;
    let autoKey = false;
    textTranslate({
      sendText,
      resultLang,
      checkKey,
      autoKey,
      cb: data => {
        textArr.push(data);
        if (resultLang === "ko") {
          $this.text(data.ko);
        } else {
          $this.text(data.ja);
        }
      }
    });
  });
}
window.getTextData = getTextData;
function textTranslate({
  sendText = "",
  sendLang = BASELANG,
  resultLang = BASELANG === "ko" ? "ja" : "ko",
  checkKey = true,
  autoKey = false,
  cb
}) {
  var promiseFunc = function(sendText) {
    return new Promise(function(resolve, reject) {
      var translateTextObj = getTextData(sendText, resultLang).data;

      var bl = canTranslateApi(translateTextObj, resultLang);

      if (bl) {
        translateAPI(sendText, sendLang, resultLang, function(data) {
          resolve(data);
          pushDatabase(translateCB(data, sendLang, checkKey, autoKey));
        });
      } else {
        // console.log(
        //   "이미 단어가 있습니다 : koText : " +
        //     translateTextObj.data.ko +
        //     " jaText :" +
        //     translateTextObj.data.ja
        // );
        resolve(translateTextObj.data);
      }
    });
  };

  promiseFunc(sendText).then(
    function(translateTextObj) {
      if (cb) {
        cb(translateCB(translateTextObj, sendLang, checkKey, autoKey));
      }
    },
    function(error) {}
  );
}

function canTranslateApi(translateTextObj, resultLang) {
  if (translateTextObj !== undefined && translateTextObj !== "") {
    if (resultLang == "ko") {
      if (translateTextObj.data.ko == "") {
        return true;
      }
    } else if (resultLang == "ja") {
      if (translateTextObj.data.ja == "") {
        return true;
      }
    }
    return false;
  }

  return true;
}

function getTextData(sendText, resultLang) {
  var textData = [];
  // console.log(DBData);
  if (resultLang == "ja") {
    textData = DBData.filter(function(item) {
      return (
        $.trim(item.data.ko) === $.trim(sendText) ||
        $.trim(item.data.ja) === $.trim(sendText)
      );
    });
  } else if (resultLang == "ko") {
    textData = DBData.filter(function(item) {
      return (
        $.trim(item.data.ja) === $.trim(sendText) ||
        $.trim(item.data.ko) === $.trim(sendText)
      );
    });
  }

  if (textData.length !== 0) {
    if (
      (resultLang == "ko" && textData[0].data.ko === "") ||
      (resultLang == "ja" && textData[0].data.ja === "")
    ) {
      textData = [];
    }
  }

  if (textData.length >= 1) {
    if (textData.length !== 1) {
      console.log("중복저장된 항목", textData[0]);
    }
    return {
      data: textData[0]
    };
  } else {
    return {
      data: ""
    };
  }
}

function pushDatabase(translateTextObj) {
  const { sendText, ja, ko } = translateTextObj;
  DATABASE.ref(defaultPath)
    .child("/")
    .push(
      {
        sendText,
        ja,
        ko
      },
      function(error) {
        if (error) {
          console.log("Error has occured during saving process");
        } else {
          console.log("Data hss been saved succesfully");
        }
      }
    );
}

function translateCB(translateTextObj, sendLang, checkKey, autoKey) {
  if (!checkKey) {
    if (sendLang == "ja") {
      translateTextObj.ja = translateTextObj.sendText;
    } else if (sendLang == "ko") {
      translateTextObj.ko = translateTextObj.sendText;
    }
  }
  return translateTextObj;
}

function translateAPI(text, sendLang, resultLang, cb) {
  var apiUrl = "http://localhost:3000";
  $.ajax({
    type: "GET",
    beforeSend: function(request) {
      request.setRequestHeader("content-type", "text/javascript");
    },
    url: apiUrl + "/translate",
    data: { text, sendLang, resultLang },
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function(data) {
      var data = JSON.parse(data);
      if (cb) {
        cb(data);
      }
    }
  });
}

function addClickCss() {
  var cssHTML = "<style type='text/css'> ";
  cssHTML +=
    ".langClickCss:hover{ background-color:#ddd; font-weight:bold; curser: pointer;}";
  cssHTML += " </style>";
  $("head").append(cssHTML);
  $("[data-langtext]").addClass("langClickCss");
  $(".langClickCss").click(function() {
    $(this).addClass("changeTextObj");
    var data = getTextData($.trim($(this).text()), BASELANG);

    if (data.data === "" && data.lang === "") {
      alert("DB에 데이터가 없습니다.");
    } else {
      popupOpen($(this).text());
    }
  });
}

function addPopupHTML() {
  var popupHTML =
      '<div id="mypopup" class="popup-ui"><div class="popup-ui-wrapper"><div class="popup-ui-content"><div class="my-content"><h3 class="textString"></h3><textarea  id="txtArea" rows="4" onkeypress="enterKeyEvent();" ></textarea></div></div></div></div>',
    cssHTML = "<style type='text/css'> ",
    inputCssHTML = "<style type='text/css'> ";

  cssHTML +=
    ".popup-ui { position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: 7777; opacity: 0; visibility: hidden; background: rgba(0, 0, 0, 0.5); text-align: center; transition: all 0.2s ease-in-out; }";
  cssHTML +=
    ".popup-ui:before { content: ''; display: inline-block; height: 100%; vertical-align: middle; }";
  cssHTML +=
    ".popup-ui .popup-ui-wrapper { position: relative; display: inline-block; vertical-align: middle; margin: 0 auto; text-align: left; max-width:90%; }";
  cssHTML +=
    ".popup-ui .popup-ui-wrapper .popup-ui-content { position: relative; background: #FFF; padding: 0; width: auto; margin: 0 auto; opacity: 0; visibility: hidden; border: solid 5px #FFF; width:100%; transition: all 0.2s ease-in-out; transform: scale(0.8); box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5); }";
  cssHTML += ".popup-ui.show { opacity: 1; visibility: visible; }";
  cssHTML +=
    ".popup-ui.show .popup-ui-content { opacity: 1; visibility: visible; transform: scale(1); }";
  cssHTML += ".my-content img { max-width: 100%; height: auto; }";
  cssHTML +=
    ".my-content h3 { padding: 0 10px; font-weight: 300; margin-bottom: 0; }";
  cssHTML += ".my-content p { padding: 0 10px; font-size: 0.9em; }";
  cssHTML +=
    "#btnpopup { display: block; margin: 2em auto 0 auto; width: 200px; }";
  cssHTML += " </style>";

  inputCssHTML = "<style type='text/css'> ";

  inputCssHTML += " #txtArea { width: 100%; margin-top: 10px; padding: 10px;}";
  inputCssHTML += " </style>";

  $("body").append(popupHTML);
  $("head").append(cssHTML);
  $("head").append(inputCssHTML);

  // js binding
  var BUTTON = document.getElementById("btnpopup");
  var POPUP = document.getElementById("mypopup");

  // Popup modal (Click on modal to close it)
  POPUP.addEventListener(
    "click",
    function() {
      if ($(event.target).closest(".popup-ui-wrapper").length == 0) {
        this.className = "popup-ui";
        $(".changeTextObj").removeClass("changeTextObj");
      }
    },
    false
  );
}
function popupOpen(textString) {
  var POPUP = document.getElementById("mypopup");
  POPUP.className = "popup-ui  show";

  $("#mypopup")
    .find(".textString")
    .text(textString);
  $("#mypopup")
    .find(".inputForm")
    .attr("placeholder", textString);
}

function enterKeyEvent() {
  var key = window.event.keyCode;
  if (key === 13) {
    if (event.shiftKey) {
    } else {
      changeDBText(
        $.trim($(".textString").text()),
        $.trim($("#txtArea").val())
      );
      event.preventDefault();
    }

    return false;
  }
}
