 (function($) {
  	$.fn.sorted = function(customOptions) {
  		var options = {
  			reversed: false,
  			by: function(a) { return a.text(); }
  		};
  		$.extend(options, customOptions);
  		$data = $(this);
  		arr = $data.get();
  		arr.sort(function(a, b) {
  		   	var valA = options.by($(a));
  		   	var valB = options.by($(b));
  			if (options.reversed) {
  				return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
  			} else {		
  				return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
  			}
  		});
  		return $(arr);
  	};
  })(jQuery);

  // DOMContentLoaded
  $(function() {
  	 /* nav function  */
	$('#nav').flipNav();
	$('#nav li:nth-child(2) a span:first-child').addClass('current');
	$('#nav ul li').click(function(){
		$(this).closest('#nav').find('.current').removeClass('current');
	});
	Cufon.replace('#hotelTitle', {fontFamily: 'Aller', fontWeight: 'bold'});
	Cufon.replace('.ticket', {fontFamily: 'Aller'});
	
  	  	var $filterType = $('#searchHotel input[name="type"]');
      	var $filterSort = $('#searchHotel input[name="sort"]');
    	
      	var $applications = $('#engine');
    	
      	// clone applications to get a second collection
      	var $data = $applications.clone();

        // attempt to call Quicksand on every form change
      	$filterType.add($filterSort).change(function(e) {
      		if ($($filterType+':checked').val() == 'all') {
      			var $filteredData = $data.find('li');
      		} else {
      			var $filteredData = $data.find('li[data-type=' + $($filterType+":checked").val() + ']');
      		}
        
          // if sorted by size
      		if ($('#searchHotel input[name="sort"]:checked').val() == "Strip") {
      			var $sortedData = $filteredData.sorted({
      				by: function(v) {
      					return parseFloat($(v).find('span[data-type=Strip]').text());
      				}
      			});
      		} else {
      		// if sorted by name
      			var $sortedData = $filteredData.sorted({
      				by: function(v) {
      					return $(v).find('strong').text().toLowerCase();
      				}
      			});
      		}
  		// finally, call quicksand
  	  $applications.quicksand($sortedData, {
  	    duration: 800,
  	    easing: 'easeInOutQuad',
		useScaling: true
  	  });

  	});
  
  });