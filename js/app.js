$(document).ready(function() {
				var caption = $('#slideshow_tabs .slideshow_caption');
				var slideshow_tabs = new Slideshow({
					id : 'slideshow_tabs',
					autoplay: true,
					autoplay_start_delay : 000,
					
					displayTime: 3000,
					easing: 'swing',
					variableHeight: true,
					variableWidth: true,
					callback: function(obj) {
						caption.text($('#slideshow_tabs .currentSlide figcaption').text());
					}
				});

				$('.slideshow .controle').click(function(){
					slideshow_tabs.toggleSlideShow();
					$(this).toggleClass('play');
					$(this).toggleClass('pause');
						
				});

				
				$('.slideshow').on('mouseenter focus', function() {
					slideshow_tabs.handleInMouse();
					
				})
				.mouseleave(function() {
					slideshow_tabs.handleOutMouse();
				});

				
								
			});