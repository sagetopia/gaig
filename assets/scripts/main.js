(function($) {
	$(document).ready(function() {
		$('.faq-accordion').accordion({
          header: '.faq-title',
          heightStyle: 'content'
        });

        $('.tooltip').on('click', function(e) {
        	e.preventDefault();

        	var tooltip = $(this).data('definition');
        	$('.tooltip-content.' + tooltip).addClass('active');
        });

        $('.tooltip-content').on('click', function() {
        	$(this).removeClass('active');
        });

        $('select').each(function() {
            var placeholder = $(this).attr('placeholder') || 'Select an option';
         
            $(this).select2({ 
                placeholder: placeholder,
                minimumResultsForSearch: 5,
            });
        });

        $('.btn-trigger').on('click', function() {
            $('body').toggleClass('scroll-lock');
        });
	});
})(jQuery);