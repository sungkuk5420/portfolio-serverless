jQuery(document).ready(function() {
  $("form#formcontactus").submit(function(data) {
    $("form#formcontactus .error-form").remove();
    $("form#formcontactus .success").remove();
    var e = false;
    $(".requiretop").each(function() {
      if (jQuery.trim($(this).val()) === "") {
        $(this)
          .parent()
          .append(
            '<span class="error-form flash animated"><i class="fa fa-exclamation-triangle"></i></span>'
          );
        e = true;
      } else if ($(this).hasClass("email")) {
        var t = /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;
        if (!t.test(jQuery.trim($(this).val()))) {
          $(this)
            .parent()
            .append(
              '<span class="error-form flash animated"><i class="fa fa-exclamation-triangle"></i></span>'
            );
          e = true;
        }
      }
    });
    if (!e) {
      formInput = $(this).serialize();
      console.log(formInput);
      $(".requiretop").val("");
      $.ajax($(this).attr("action"), {
        data: formInput,
        type: "POST",
        error: function(data) {
          $("form#formcontactus").append(
            '<div class="col-xs-12"><div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Your message send Fail error message is "' +
              data.statusText +
              '"</strong></div></div>'
          );
        },
        success: function(data) {
          console.log("success");
          console.log(data);
          $("form#formcontactus").append(
            '<div class="col-xs-12"><div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button><strong>Your message has been sent, we will get back to you as soon as possible !</strong></div></div>'
          );
        }
      });
    }
    return false;
  });
  $("form#formcontactus input").focus(function() {
    $("form#formcontactus .error-form").remove();
    $("form#formcontactus .success").remove();
  });
  $("form#formcontactus textarea").focus(function() {
    $("form#formcontactus .error-form").remove();
    $("form#formcontactus .success").remove();
  });
});
