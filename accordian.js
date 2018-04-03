$(document).ready(function(){ 

	
	$('.tab_heading').click(function(){ 
		var $this = $(this); 
		$('.tab_container').not($this.closest('.tab_container')).removeClass('active');	
		$('.tab_container').not($this.closest('.tab_container')).find('.tab_content').slideUp('slow');
		$this.closest('.tab_container').toggleClass('active');		
		
		//$this.siblings('.tab_content').slideToggle('slow');
		$this.closest('.tab_container').find('.tab_content').slideToggle('slow');
	});
	$('.tab_heading').eq(0).trigger('click');
});