$.fancybox.defaults.thumbs.autoStart = true;
$().fancybox({
  selector : '.main-slider .slick-slide:not(.slick-cloned)',
  backFocus : false
});

// Slick
$(".main-slider").slick({
  slidesToShow   : 5,
  infinite : true,
  dots     : false,
  arrows   : false,
  responsive : [
    {
      breakpoint : 1280,
      settings : {
        slidesToShow   : 4,
        slidesToScroll : 4
      }
    },
    {
      breakpoint : 1024,
      settings : {
        slidesToShow   : 3,
        slidesToScroll : 3
      }
    },
    {
      breakpoint : 768,
      settings : {
        slidesToShow   : 2,
        slidesToScroll : 2
      }
    },
    {
      breakpoint : 580,
      settings : {
        slidesToShow   : 1,
        slidesToScroll : 1
      }
    }

  ]
});
$().fancybox({
  selector : '.small-slider .slick-slide:not(.slick-cloned)',
  backFocus : false,
  afterShow : function( instance, current ) {
    current.opts.$orig.closest(".slick-initialized").slick('slickGoTo', parseInt(current.index), true);
  }
});

$(".small-slider").slick({
  slidesToShow   : 1,
  infinite : true,
  dots     : false,
  arrows   : false
});
$(document).on('click', '.slick-cloned', function(e) {
  var $slides = $(this)
  .parent()
  .children('.slick-slide:not(.slick-cloned)');

  $slides
    .eq( ( $(this).attr("data-slick-index") || 0) % $slides.length )
    .trigger("click.fb-start", { $trigger: $(this) });

  return false;
});