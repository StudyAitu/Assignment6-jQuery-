
$(document).ready(function () {
  let currentIndex = 0;
  let currentFilter = "all";

  const $items = $(".gallery-item");

  function getVisibleItems() {
    return $items.filter(function () {
      return currentFilter === "all" ||
        $(this).data("category") === currentFilter;
    });
  }

  function showPreview(index) {
    const $visible = getVisibleItems();

    if ($visible.length === 0) return;

    currentIndex = (index + $visible.length) % $visible.length;

    const $selected = $visible.eq(currentIndex);
    const imageSrc = $selected.find("img").attr("src");
    const imageAlt = $selected.find("img").attr("alt");
    const imageTitle = $selected.find("p").text();

    $("#preview-title").text(imageTitle);

    $("#preview-image")
      .attr("src", imageSrc)
      .attr("alt", imageAlt);

    $("#gallery-preview")
      .stop(true, true)
      .fadeIn(350);

    $("#preview-image")
      .stop(true, true)
      .css({
        width: "80%",
        opacity: 0.4
      })
      .animate({
        width: "100%",
        opacity: 1
      }, 450);
  }

  $(".filter-btn").on("click", function () {
    currentFilter = $(this).data("filter");

    $(".filter-btn").addClass("secondary");
    $(this).removeClass("secondary");

    $("#gallery-preview").hide();

    $items.stop(true, true).fadeOut(200).promise().done(function () {
      const $filtered = getVisibleItems();
      $filtered.fadeIn(450);

      $("#gallery-status").text(
        "Showing " + $filtered.length +
        " photographs in category: " + currentFilter
      );
    });
  });

  $(".gallery-item").on("click", function () {
    const $visible = getVisibleItems();

    currentIndex = $visible.index(this);
    showPreview(currentIndex);
  });

  $("#next-image").on("click", function () {
    showPreview(currentIndex + 1);
  });

  $("#previous-image").on("click", function () {
    showPreview(currentIndex - 1);
  });

  $("#close-preview").on("click", function () {
    $("#gallery-preview").fadeOut(300);
  });

  $(document).on("keydown", function (event) {
    if (!$("#gallery-preview").is(":visible")) return;

    if (event.key === "Escape") {
      $("#gallery-preview").fadeOut(300);
    }

    if (event.key === "ArrowRight") {
      showPreview(currentIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      showPreview(currentIndex - 1);
    }
  });
});
