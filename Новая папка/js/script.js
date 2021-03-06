
		$(document).ready(function(){
			// Handle click on paging links
			$('.paging_link').click(function(e){
				e.preventDefault();
				
				var page = $(this).text().toLowerCase();
				$('.gallery_page').addClass('hidden');
				$('#gallery_page_' + page).removeClass('hidden');
				$('.paging_link').removeClass('active');
				$(this).addClass("active");
			});
		});
	