$(document).ready(function(){
	
	// Intro slider
	/*$('.intro .slides').cycle({
		pager: '.intro .thumbs',
		easing: 'easeOutQuad',
		timeout: 5000,
		fx: 'scrollLeft',
		pauseOnPagerHover: true,
		pagerAnchorBuilder: function(idx, slide) {
			return '<a href="#" class="thumb' + (idx+1) + '">' + thumbsTitles[idx] + '</a>';
		}
	});*/
	
	// Popular slider
	/*$('.popular ul').after('<div class="prev" /><div class="next" />').carouFredSel({
		prev: ".popular .prev",
		next: ".popular .next",
		auto: false
	});*/

	// BU slider
	$('.catalogue .photos').each(function(){
		$(this).carouFredSel({
			auto: 1500,
			scroll:{
				items: 1,
				fx: "scroll"
			}
		});
		$(this).trigger('pause');
	});
	
	// Catalogue slider
	$('.catalogue>li').hover(function(){
		$(this).find('.photos').trigger('play', -1000);
	},function(){
		$(this).find('.photos').trigger('pause');
	});
	
	// Review photos
	$('.thumbs a').click(function(){
		if(!$(this).parent('li').is('.current')){
			var curImg = $('<img src="' + $(this).attr("href") + '" alt="' + $(this).attr("alt") + '" style="display:none;" />');
			$(this).parent('li').siblings('li').removeClass('current');
			$(this).parent('li').addClass('current');
			$('.rPhoto').append(curImg);
			$('.rPhoto').append('<div class="loader" />');
			curImg.load(function(){
				$(this).fadeIn(200);
				$(this).siblings('img').remove();
				$(this).siblings('.loader').remove();
			});
		};
		return false;
	});
	
	
});