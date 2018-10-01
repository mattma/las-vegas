// JavaScript Document
$(document).ready(function(){
	 /* nav function  */
	$('#nav').flipNav();
	$('#nav li:nth-child(5) a span:first-child').addClass('current');
	$('#nav ul li').click(function(){
		$(this).closest('#nav').find('.current').removeClass('current');
	});
	
	Cufon.replace('.ticket', {fontFamily: 'Aller'});
	
	var totalSlide = $('#slideshow img').length;
	var randNumber = Math.floor(Math.random() * totalSlide);
	$('#slideshow').nivoSlider({
			startSlider: randNumber,
			effect: 'sliceUpDown, sliceUpDownLeft',
			pauseTime: 7000,
			animSpeed: 1000,
			controlNavThumbs: true,
			controlNavThumbsFromRel: true,
			afterChange: function(){
				$('#slideshow .nivo-controlNav a').children('img').attr('src', '_images/slideshow/dot.png');
				if($('#slideshow .nivo-controlNav a').hasClass('active')){
						 $('#slideshow .nivo-controlNav a.active').children('img').attr('src', '_images/slideshow/dot_active.gif');
		  		}		
			}
	
	});
});
