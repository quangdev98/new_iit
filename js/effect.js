$(document).ready(function(){
	$('.open_nav').click(function(){
		$(this).toggleClass('close');
		$(this).parents('.navigation').toggleClass('selector');
	});
	$(".open_nav_child").click(function(){
		$this = $(this);
		if ($this.hasClass("active")) {
			$this.removeClass("active");
		} else {
			$(".open_nav_child").removeClass("active");
			$this.addClass("active");
		}
	});
	$('.langue').click(function(){
		$(this).siblings('.langue_tow').slideToggle(400);
	});
	$('.open_menu').click(function(){
		$(this).toggleClass('click_menu')
	});
	$('.open_menu').click(function(){
		$(this).siblings('.navbar_rigth').slideToggle(400)
	});
	$('.show_menu').click(function(){
		$(this).siblings('.menu_child').slideToggle(400)
	});
});
$(document).ready(function(){
$('.scroll-top').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 'fast')
    });
    var offset = 600, //thiết lập điều kiện khoảng cách hiển thị 
    $back_to_top = $('.scroll-top');
    $(window).scroll(function(){
        ($(this).scrollTop() > offset ) ? $back_to_top.addClass('visible-top') :  $back_to_top.removeClass('visible-top');
    });
}); 
$(window).on('scroll',function(){
	if($(window).scrollTop()){
		$('.navigation_page').addClass('header_scroll');
	} else{
		$('.navigation_page').removeClass('header_scroll')
	}
})