var $jsaboutmecontent = $(".jsaboutmecontent");

$jsaboutmecontent.waypoint(function (direction) {
  if (direction == "down") {
    $jsaboutmecontent.addClass("js-jsaboutmecontent-animate")
  } else {
    $jsaboutmecontent.removeClass("js-jsaboutmecontent-animate")
  }
},{ offset: "40%"});


var $jsbannercontent = $(".jsbannercontent");

$jsbannercontent.waypoint(function (direction) {
  if (direction == "down") {
    $jsbannercontent.addClass("js-bannercontent-animate")
  } else {
    $jsbannercontent.removeClass("js-bannercontent-animate")
  }
},{ offset: "10%"});

$(".bannerscroll").localScroll();
$(".banner-btn-scroll").localScroll();


var $jsportfoliocontent = $(".jsportfoliocontent");

$jsportfoliocontent.waypoint(function (direction) {
  if (direction == "down") {
    $jsportfoliocontent.addClass("js-jsportfoliocontent-animate")
  } else {
    $jsportfoliocontent.removeClass("js-jsportfoliocontent-animate")
  }
},{ offset: "60%"});


$('.banner-inner').parallax({imageSrc: '../images/parallax.jpg'});
