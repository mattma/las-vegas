// JavaScript Document
$(document).ready(function(){
	 /* nav function  */
	$('#nav').flipNav();
	$('#nav li:nth-child(2) a span:first-child').addClass('current');
	$('#nav ul li').click(function(){
		$(this).closest('#nav').find('.current').removeClass('current');
	});
});
