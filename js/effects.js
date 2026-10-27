
$(document).ready(function () {
  $("#hide-btn").on("click", function () {
    $("#visibility-text").hide(400);
  });

  $("#show-btn").on("click", function () {
    $("#visibility-text").show(400);
  });

  $("#toggle-btn").on("click", function () {
    $("#visibility-text").toggle(400);
  });

  $("#fade-out-btn").on("click", function () {
    $("#fade-image").stop(true, true).fadeOut(700);
  });

  $("#fade-in-btn").on("click", function () {
    $("#fade-image").stop(true, true).fadeIn(700);
  });

  $("#fade-toggle-btn").on("click", function () {
    $("#fade-image").stop(true, true).fadeToggle(700);
  });

  $("#slide-up-btn").on("click", function () {
    $("#slide-panel").stop(true, true).slideUp(500);
  });

  $("#slide-down-btn").on("click", function () {
    $("#slide-panel").stop(true, true).slideDown(500);
  });

  $("#slide-toggle-btn, #panel-header").on(
    "click",
    function () {
      $("#slide-panel")
        .stop(true, true)
        .slideToggle(500);
    }
  );
});
