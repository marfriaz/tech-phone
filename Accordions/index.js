$(function () {
  $(".accordion h3").on("click", function (e) {
    var $parent = $(this).parent();
    $parent.toggleClass("is-active");
  });
});
