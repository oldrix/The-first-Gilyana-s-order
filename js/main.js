$(function () {
  $(".burger, .overlay").on("click", function (e) {
    e.preventDefault();
    $(".nav").toggleClass("nav--open");
    $(".overlay").toggleClass("overlay--show");
  });
});
