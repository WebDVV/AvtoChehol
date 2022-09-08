
/*<!-- =================  start   =========================== -->*/
$(document).ready(function() {
 
  $(".slider").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      // slideSpeed : 300,
      // paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
});
/*<!-- =================  end   =========================== -->*/



$(function() {
 cbpHorizontalMenu.init();
});



$('.sl').slick({
  autoplay: false,
  dots: false,
  asNavFor: '.sl2'
});


$('.sl2').slick({
  autoplay: false,
  dots: false,
  slidesToShow: '4',
  asNavFor: '.sl',
  focusOnSelect: true,
  arrows: false,
  centerMode: true,
  centerPadding: '10px'
});

 



