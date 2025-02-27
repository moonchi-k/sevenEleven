$(document).ready(function () {
  $(window).scroll(function () {
    var pageY = $(window).scrollTop();
    console.log(pageY);

    if (pageY >= 300) {
      $("header").addClass("header_active");
    } else {
      $("header").removeClass("header_active");
    }
  });

  //   scroll event end

  $("header").hover(
    function () {
      $(".lnb").css({
        height: 400,
      });
    },
    function () {
      $(".lnb").css({
        height: 0,
      });
    }
  );
});
