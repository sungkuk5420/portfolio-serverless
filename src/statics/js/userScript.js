/**
 * Created by pc on 2017/06/20.
 */
var modalScroll = null;
$(window).load(function() {
  setTimeout(function() {
    $(".preloader").fadeOut("slow", function() {
      // setLanguage('ja');
      $(".preloader-left").addClass("slide-left");
      $(".preloader-right").addClass("slide-right");
      $("#portfolio-case").addClass("full-portfolio");
    });
  }, 300);
});

$(".menu-item").on("click", function() {
  //Portfolio masonry
  var $container = $("#projects");
  $container.isotope({
    masonry: {
      columnWidth: 0
    },
    itemSelector: ".project"
  });

  //Portfolio filters
  $("#filters").on("click", "li", function() {
    $("#filters li").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $container.isotope({ filter: filterValue });
  });
});

//Portfolio Modal
$(".open-project").on("click", function(e) {
  e.preventDefault();
  var projectUrl = $(this).attr("href");
  projectUrl = "test";
  $("#project-modal")
    .modal("show")
    .find(".modal-content")
    .load($(this).attr("href"));
  //$(project).modal({
  //  remote: projectUrl + ' #project'
  //})
  setTimeout(function() {
    modalScroll = new IScroll(".modal", {
      scrollbars: true,
      mouseWheel: true
    });
  }, 200);

  return false;
});

//Blog post Modal
$(".open-post").on("click", function() {
  var postUrl = $(this).attr("href");

  var post =
    '<div class="modal" id="post-modal"><div class="inline-menu-container"><a id="modal-close" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></a></div><div class="modal-dialog"><div class="modal-content"></div></div></div>';

  $(post).modal({
    remote: postUrl + " #post"
  });

  return false;
});

//On Click Open Menu Items
function menuClick() {
  $(".name-block").addClass("reverse");
  $(".name-block-container").addClass("reverse");
  $(".menu-blocks").addClass("hidex");
  $(".inline-menu-container").removeClass("hidex");
  $(".inline-menu-container").addClass("showx");
}

//On Click Open About/Resume Block
function about() {
  menuClick();
  $(".content-blocks").removeClass("showx");
  $(".content-blocks").addClass("hidex");
  $(".content-blocks.about").removeClass("hidex");
  $(".content-blocks.about").addClass("showx");
  $(".menu-item").removeClass("active");
  $(".menu-item.about").addClass("active");
}
//On Click Open Portfolio Block
function portfolio() {
  menuClick();
  $(".content-blocks").removeClass("showx");
  $(".content-blocks").addClass("hidex");
  $(".content-blocks.portfolio").removeClass("hidex");
  $(".content-blocks.portfolio").addClass("showx");
  $(".menu-item").removeClass("active");
  $(".menu-item.portfolio").addClass("active");
}
//On Click Open Blog Block
function blog() {
  menuClick();
  $(".content-blocks").removeClass("showx");
  $(".content-blocks").addClass("hidex");
  $(".content-blocks.blog").removeClass("hidex");
  $(".content-blocks.blog").addClass("showx");
  $(".menu-item").removeClass("active");
  $(".menu-item.blog").addClass("active");
}
//On Click Open Contact Block
function contact() {
  menuClick();
  $(".content-blocks").removeClass("showx");
  $(".content-blocks").addClass("hidex");
  $(".content-blocks.contact").removeClass("hidex");
  $(".content-blocks.contact").addClass("showx");
  $(".menu-item").removeClass("active");
  $(".menu-item.contact").addClass("active");
}

//On Click Close Blocks
function closeMenus() {
  $(".name-block").removeClass("reverse");
  $(".name-block-container").removeClass("reverse");
  $(".menu-blocks").removeClass("hidex");
  $(".content-blocks").removeClass("showx");
  $(".content-blocks").addClass("hidex");
  $(".inline-menu-container").removeClass("showx");
  $(".inline-menu-container").addClass("hidex");
  $(".menu-item").removeClass("active");
}

//Placeholder
$("input,textarea").on("focus", function() {
  $(this).data("placeholder", $(this).attr("placeholder"));
  $(this).attr("placeholder", "");
});
$("input,textarea").blur(function() {
  $(this).attr("placeholder", $(this).data("placeholder"));
});

$("input, textarea").placeholder();

function updateProjectCount() {
  console.log(updateProjectCount);
  $(".project-count")
    .removeClass("hide")
    .text($("#projectList .exp").length + "個");
}

function detectMobile() {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

$("document").ready(function() {
  updateProjectCount();
  if (detectMobile()) {
    $("#project-modal").css("overflow-y", "scroll");
    $("#post-modal").css("overflow-y", "scroll");
    $(".content-blocks").css("overflow-y", "scroll");
  } else {
    new IScroll(".content-blocks.about", {
      scrollbars: true,
      mouseWheel: true
    });
    new IScroll(".content-blocks.portfolio", {
      scrollbars: true,
      mouseWheel: true
    });
    new IScroll(".content-blocks.blog", {
      scrollbars: true,
      mouseWheel: true
    });
    new IScroll(".content-blocks.contact", {
      scrollbars: true,
      mouseWheel: true
    });
    new IScroll(".modal", {
      scrollbars: true,
      mouseWheel: true
    });
  }

  $("#langForm").submit();
});
