
$(document).ready(function () {
  let itemCounter = 3;

  $("#append-btn").on("click", function () {
    $("#dynamic-list").append(
      $("<li>").text("Appended Item " + itemCounter++)
    );
  });

  $("#prepend-btn").on("click", function () {
    $("#dynamic-list").prepend(
      $("<li>").text("Prepended Item " + itemCounter++)
    );
  });

  $("#remove-btn").on("click", function () {
    $("#dynamic-list li:last").remove();
  });

  let firstImage = true;

  $("#change-image-btn").on("click", function () {
    const imageUrl = firstImage
      ? "https://picsum.photos/id/1025/800/500"
      : "https://picsum.photos/id/1015/800/500";

    $("#attribute-image").attr("src", imageUrl);
    $("#attribute-image").attr(
      "alt",
      firstImage ? "Dog photograph" : "Nature landscape"
    );

    firstImage = !firstImage;
  });

  let firstLink = true;

  $("#change-link-btn").on("click", function () {
    if (firstLink) {
      $("#dynamic-link")
        .attr("href", "https://jquery.com")
        .text("Visit jQuery Official Website");
    } else {
      $("#dynamic-link")
        .attr("href", "https://api.jquery.com")
        .text("Visit jQuery API");
    }

    firstLink = !firstLink;
  });

  $("#name-input").on("input", function () {
    const name = $(this).val().trim();

    $("#name-preview").text(name || "Not entered");
  });

  $("#email-input").on("input", function () {
    const email = $(this).val().trim();

    $("#email-preview").text(email || "Not entered");
  });

  $("#live-form").on("submit", function (event) {
    event.preventDefault();
  });
});

