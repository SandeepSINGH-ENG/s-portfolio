$(".slick").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<div class='pre'><i class='fa fa-angle-left' aria-hidden='true'></i></div>",
      nextArrow:"<div class='next'><i class='fa fa-angle-right' aria-hidden='true'></i></div>",
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
}]
});
$(document).ready(function(){
 $(".all").click(function(){
$(".pop-more").removeClass("pop-hide");
$("body").css("overflow", "hidden");

 });
 $(".close").click(function(){
  $(".pop-more").addClass("pop-hide");
  $("body").css("overflow", "auto");
   });
 });

 