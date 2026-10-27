
$(document).ready(function () {
  function resetBox(selector) {
    $(selector)
      .stop(true, false)
      .css({
        left: "15px",
        top: "15px",
        width: "70px",
        height: "70px",
        opacity: 1
      });
  }

  $("#basic-start").on("click", function () {
    resetBox("#basic-box");

    $("#basic-box").animate({
      left: "55%",
      top: "100px",
      width: "110px",
      height: "110px"
    }, 1000);
  });

  $("#basic-reset").on("click", function () {
    resetBox("#basic-box");
  });

  $("#sequence-start").on("click", function () {
    resetBox("#sequence-box");

    $("#sequence-box")
      .animate({ left: "60%" }, 600)
      .animate({ top: "180px" }, 600)
      .animate({
        width: "35px",
        height: "35px"
      }, 600)
      .animate({
        left: "15px",
        top: "15px",
        width: "70px",
        height: "70px"
      }, 800);
  });

  $("#sequence-reset").on("click", function () {
    resetBox("#sequence-box");
  });

  $("#combined-start").on("click", function () {
    resetBox("#combined-box");

    $("#combined-box").animate({
      left: "55%",
      top: "120px",
      width: "130px",
      height: "130px",
      opacity: 0.35
    }, 1200);
  });

  $("#combined-reset").on("click", function () {
    resetBox("#combined-box");
  });
});

