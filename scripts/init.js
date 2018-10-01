$(function(){
	/* nav function  */
	$('#nav').flipNav();
	$('#nav li:first-child a span:first-child').addClass('current');
	$('#nav ul li').click(function(){
		$(this).closest('#nav').find('.current').removeClass('current');
	});
	
	Cufon.replace(' #vegasFeeds h3', {fontFamily: 'Aller'});
	
	Cufon.replace('.tabImg a', {fontFamily: 'Aller', fontWeight: 'bold', hover: true});
	
	var totalSlide = $('#slideshow img').length;
	var randNumber = Math.floor(Math.random() * totalSlide);
	$('#slideshow').nivoSlider({
			startSlider: randNumber,
			effect: 'fold',
			pauseTime: 7000,
			animSpeed: 600,
			controlNavThumbs: true,
			controlNavThumbsFromRel: true,
			afterChange: function(){
				$('#slideshow .nivo-controlNav a').children('img').attr('src', '_images/slideshow/dot.png');
				if($('#slideshow .nivo-controlNav a').hasClass('active')){
						 $('#slideshow .nivo-controlNav a.active').children('img').attr('src', '_images/slideshow/dot_active.gif');
		  		}		
			}
	
	});
	
	$.Juitter.start({
		searchType:"searchWord", 
		searchObject:"las vegas, Las Vegas",
		lang:"en",
		live:"live-20",
		placeHolder:"juitterContainer",
		loadMSG: "image/gif",
		imgName: "_images/nivoSlider/loading.gif",
		total: 3,
		readMore: "Read it on Twitter",
		nameUser:"image",
		openExternalLinks:"newWindow",
        filter:"sex->*BAD word*,porn->*BAD word*,fuck->*BAD word*,shit->*BAD word*"
	});
	
	$('#newsTickers').jcarousel({
		vertical: true,
		scroll: 2,
		auto: 15,
		wrap: 'circular'
	});
	$('#newsTickers li:odd').css('background-color', '#222222');
	
	$('img.captify').captify({
		speedOver: 'slow',
		hideDelay: 300
	});
   
	$("#tabs #tabSelect").idTabs(); 
	 
	$('#hotels > ul, #shows > ul, #shops > ul, #casinos > ul ').jcarousel({
		scroll: 3,
		size: 9,
		start: 0,
		wrap: 'both'
	});

});