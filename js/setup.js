
$(document).ready(function () {
  console.log("jQuery is ready!");

  $("#ready-status")
    .text("jQuery is ready!")
    .css("color", "#38d9b5");

  $("#id-btn").on("click", function () {
    $("#selector-title")
      .text("Updated using an ID selector!")
      .css("color", "#38d9b5");
  });

  $("#class-btn").on("click", function () {
    $(".selector-text")
      .text("Updated using a class selector!")
      .css("color", "#c4baff");
  });

  $("#tag-btn").on("click", function () {
    $(".demo p").css({
      "font-weight": "bold",
      "font-size": "19px"
    });
  });

  $("#html-btn").on("click", function () {
    $("#html-result").html(
      "<strong>HTML updated!</strong> " +
      "<em>This text was inserted using .html().</em>"
    );
  });

  $("#reset-btn").on("click", function () {
    $("#selector-title")
      .text("Original heading")
      .removeAttr("style");

    $(".selector-text").each(function (index) {
      $(this)
        .text("Original paragraph " + (index + 1) + ".")
        .removeAttr("style");
    });

    $("#html-result").html("Original HTML content");
    $(".demo p").removeAttr("style");
  });
});
